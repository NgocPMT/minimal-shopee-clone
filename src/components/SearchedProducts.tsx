import { Link, useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const SearchedProducts = () => {
  const { products, error, loading } = useProducts();
  const { query } = useParams();

  if (!query) {
    throw new Error("query is not defined");
  }

  const isFounded = products?.find((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {products && isFounded ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
          {products.map((product) =>
            product.title.toLocaleLowerCase().includes(query.toLowerCase()) ? (
              <ProductCard key={product.id} {...product} />
            ) : null
          )}
        </div>
      ) : (
        products && (
          <h1>
            Sorry, We didn't find what you searched for. Try explore{" "}
            <Link to="/shop">our products</Link>
          </h1>
        )
      )}
    </>
  );
};

export default SearchedProducts;
