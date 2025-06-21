import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const categorySet = new Set<string>();
    products.forEach((product) => {
      product.categories.forEach((category) => categorySet.add(category.name));
    });
    setAllCategories(Array.from(categorySet));
  }, [products]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.categories.some((cat) => selectedCategories.includes(cat.name))
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, products]);

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Categorieën</h2>
        {allCategories.map((category) => (
          <label key={category} className="flex items-center mb-2 space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="accent-blue-500"
            />
            <span>{category}</span>
          </label>
        ))}
      </aside>

      {/* Product Carousel */}
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

        <div className="flex items-center relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Scroll naar links"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div ref={carouselRef} className="product-carousel pl-8 pr-8 overflow-x-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
            aria-label="Scroll naar rechts"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
