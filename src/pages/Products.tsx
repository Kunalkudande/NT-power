import React, { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "../data/woocommerceserv";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { Product } from "@/types/product";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const autoOpenId = queryParams.get("productId");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        const cats = new Set<string>();
        data.forEach((p) => p.categories.forEach((c) => cats.add(c.name)));
        setAllCategories(Array.from(cats));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    return selectedCategories.length === 0
      ? products
      : products.filter((p) =>
          p.categories.some((c) => selectedCategories.includes(c.name))
        );
  }, [selectedCategories, products]);

  const groupedByCategory: Record<string, Product[]> = {};
  filteredProducts.forEach((product) => {
    product.categories.forEach((cat) => {
      if (
        selectedCategories.length === 0 ||
        selectedCategories.includes(cat.name)
      ) {
        if (!groupedByCategory[cat.name]) groupedByCategory[cat.name] = [];
        groupedByCategory[cat.name].push(product);
      }
    });
  });

  // Define your preferred category order
  const preferredCategoryOrder = [
    "Active Balance BMS",
    "Accessories",
    "Standard BMS",
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (loading) return <p className="p-4">Loading products…</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row gap-8 p-8 pt-24 flex-grow">
        <aside className="w-full lg:w-1/4">
          <Sidebar
            allCategories={allCategories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
        </aside>

        <main className="w-full lg:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Our Products</h1>

          {Object.entries(groupedByCategory)
            .sort(([a], [b]) => {
              const indexA = preferredCategoryOrder.indexOf(a);
              const indexB = preferredCategoryOrder.indexOf(b);
              if (indexA === -1 && indexB === -1) return a.localeCompare(b);
              if (indexA === -1) return 1;
              if (indexB === -1) return -1;
              return indexA - indexB;
            })
            .map(([category, items]) => (
              <section key={category} className="mb-12">
                <h2 className="text-lg font-medium mb-4">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {items.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      autoOpen={autoOpenId === String(product.id)}
                    />
                  ))}
                </div>
              </section>
            ))}

          {Object.keys(groupedByCategory).length === 0 && (
            <p className="text-gray-500">
              No products found for selected categories.
            </p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
