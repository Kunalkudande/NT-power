import { useState } from "react";
import { Category } from "@/types/product";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ 
  categories, 
  selectedCategories,
  onCategoryChange
}: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              className="category-checkbox h-4 w-4 cursor-pointer"
              checked={selectedCategories.includes(category.id)}
              onChange={() => onCategoryChange(category.id)}
            />
            <label 
              htmlFor={`category-${category.id}`}
              className="ml-2 text-gray-700 cursor-pointer"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
