import { Link } from "react-router";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

const Recommended = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const recommendedLength = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("unknown error");
        }
        setProducts(null);
      } finally {
        setLoading(false);
        setError(null);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-white flex justify-between px-3 py-2 mt-4">
        <h2 className="text-amber-700">RECOMMENDED</h2>
        <Link to="shop" className="text-gray-500 hover:text-black text-sm">
          More &gt;
        </Link>
      </div>
      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {products && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-min gap-2 bg-gray-100 px-1 py-2 lg:min-h-[45.5vh] place-content-center">
          {products.slice(0, recommendedLength).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Recommended;
