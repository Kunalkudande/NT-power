import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { fetchProducts } from '@/data/woocommerceserv';
import { useNavigate } from 'react-router-dom';

const accessoryProductIds = [111,112,113,114,115,116]; // Example IDs for accessories


const AccessoriesSlider = () => {
  const [accessoryProducts, setAccessoryProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessoryProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        const filteredAccessoryProducts = allProducts.filter((product: any) =>
          accessoryProductIds.includes(product.id)
        );
        setAccessoryProducts(filteredAccessoryProducts);
      } catch (err: any) {
        console.error('Error fetching accessory products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchAccessoryProducts();
  }, []);

  const handleBuyNow = (productId: number) => {
    navigate(`/products?productId=${productId}`);
  };

  const handleViewMore = () => {
    navigate('/products'); // Redirect to the products page
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="accessories-products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Accessories</h2>
        <p className="text-nt-medium-gray max-w-3xl mx-auto text-center mb-12">
          Explore a range of high-quality accessories for your devices
        </p>

        {/* Flex container for displaying the products */}
        <div className="flex gap-4 py-4 overflow-x-auto md:overflow-x-visible">
          {accessoryProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
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
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-6">
          <a
            href="#"
            onClick={handleViewMore}
            className="text-blue-600 hover:underline font-semibold"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSlider;
