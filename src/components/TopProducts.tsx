import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { fetchProducts } from '@/data/woocommerceserv';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const topProductIds = [46,48, 55,52];

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        const filteredTopProducts = allProducts.filter((product: any) =>
          topProductIds.includes(product.id)
        );
        console.log('Filtered Top Products:', filteredTopProducts);
        setTopProducts(filteredTopProducts);
      } catch (err: any) {
        console.error('Error fetching top products:', err);
        setError('Failed to load top products');
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  const handleBuyNow = (productId: number) => {
    // Navigate to the /products route with productId query param
    navigate(`/products?productId=${productId}`);
  };

  if (loading) return <p>Loading top products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="top-products" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Top Selling Products</h2>
        <p className="text-nt-medium-gray max-w-3xl mx-auto text-center mb-12">
          DALY's most popular Battery Management Systems, designed for optimal performance and reliability
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="p-6 bg-white rounded-t-xl">
                <img
                  src={product.images?.[0]?.src || '/default-image.jpg'}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
              </div>

              <div className="p-6 bg-nt-light-gray">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-nt-blue font-medium mb-3">€{product.price}</p>

                <div className="mb-4">
                  {product.attributes?.map((attr: any, idx: number) => (
                    <p key={idx} className="text-sm text-nt-medium-gray flex items-center mb-1">
                      <span className="w-1.5 h-1.5 bg-nt-blue rounded-full mr-2"></span>
                      {attr.name}: {attr.options?.join(', ')}
                    </p>
                  ))}
                </div>

                <Button className="btn-primary w-full" onClick={() => handleBuyNow(product.id)}>
                  <ShoppingCart className="mr-2" size={16} />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
