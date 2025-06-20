import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { fetchProducts } from '@/data/woocommerceserv';
import { useNavigate } from 'react-router-dom';

const topProductIds = [44, 45, 76, 47,75,50, 77, 51, 79, 53, 54, 61];

const ProductSlider = () => {
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        const filteredTopProducts = allProducts.filter((product: any) =>
          topProductIds.includes(product.id)
        );
        setTopProducts(filteredTopProducts);
      } catch (err: any) {
        console.error('Error fetching top products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  const handleBuyNow = (productId: number) => {
    navigate(`/products?productId=${productId}`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  // Split products into two rows
  const firstRowProducts = topProducts.slice(0, 6);
  const secondRowProducts = topProducts.slice(6);

  return (
    <section id="top-products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Other Products</h2>
        <p className="text-nt-medium-gray max-w-3xl mx-auto text-center mb-12">
          DALY's popular Battery Management Systems with top-tier reliability and safety
        </p>

        <div className="space-y-8">
          {/* First row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {firstRowProducts.map((product) => (
              <ProductCard key={product.id} product={product} handleBuyNow={handleBuyNow} />
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {secondRowProducts.map((product) => (
              <ProductCard key={product.id} product={product} handleBuyNow={handleBuyNow} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted for cleaner code
const ProductCard = ({ product, handleBuyNow }: any) => (
  <div className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
    <div className="h-[100px] bg-white flex items-center justify-center">
      <img
        src={product.images?.[0]?.src || '/default-image.jpg'}
        alt={product.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <div className="bg-blue-50 p-3 h-[130px] flex flex-col justify-between">
      <div className="text-xs font-semibold text-center mb-1 line-clamp-2">{product.name}</div>
      <div className="text-sm text-nt-blue font-bold text-center">€{product.price}</div>
      <Button
        className="btn-primary text-xs py-1 px-2 w-full mt-2"
        onClick={() => handleBuyNow(product.id)}
      >
        <ShoppingCart className="mr-1" size={14} />
        Buy
      </Button>
    </div>
  </div>
);

export default ProductSlider;
