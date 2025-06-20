// types/product.ts
export interface Product {
  id: string; // or number, depending on your data
  name: string;
  price: number;
  description: string;
  images: { src: string }[];
  categories: { name: string }[];
  features: string[];
  // other product properties
}

  
  export interface Category {
    id: string;
    name: string;
  }
  