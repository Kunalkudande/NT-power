import React from "react";

interface SidebarProps {
  allCategories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  allCategories,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Filter by Categories</h2>
      <div className="space-y-4">
        {allCategories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="mr-2"
            />
            <label htmlFor={category} className="text-lg">
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
