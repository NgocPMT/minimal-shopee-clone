import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCartSkeleton from "./ProductCartSkeleton";

const Products = () => {
  const { products, error, loading } = useProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
      {error && <p>{error}</p>}
      {loading &&
        Array(12)
          .fill(null)
          .map((_, index) => <ProductCartSkeleton key={index} />)}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
};

export default Products;
