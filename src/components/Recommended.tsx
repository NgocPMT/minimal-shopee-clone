import { Link } from "react-router";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import ProductCartSkeleton from "./ProductCartSkeleton";

const Recommended = () => {
  const { products, error, loading } = useProducts();
  const recommendedLength = 6;

  return (
    <section>
      <div className="bg-white flex justify-between px-3 py-2 mt-4">
        <h2 className="text-amber-700">RECOMMENDED</h2>
        <Link to="shop" className="text-gray-500 hover:text-black text-sm">
          More &gt;
        </Link>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-min gap-2 bg-gray-100 px-1 py-2 lg:min-h-[45.5vh] place-content-center">
        {loading &&
          Array(6)
            .fill(null)
            .map((_, index) => <ProductCartSkeleton key={index} />)}
        {products &&
          products
            .slice(0, recommendedLength)
            .map((product) => (
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
    </section>
  );
};

export default Recommended;
