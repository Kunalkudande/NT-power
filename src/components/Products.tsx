import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import { Product } from "@/types/product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Product[] = await res.json();
        setProducts(data);
        setFilteredProducts(data);
        const cats = new Set<string>();
        data.forEach(p => p.categories.forEach(c => cats.add(c.name)));
        setAllCategories([...cats]);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      selectedCategories.length === 0
        ? products
        : products.filter(p => p.categories.some(c => selectedCategories.includes(c.name)))
    );
  }, [selectedCategories, products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 pt-24"> {/* pt-24 to clear fixed navbar */}
      <Sidebar
        allCategories={allCategories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

      <main className="lg:w-3/4 w-full">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;

