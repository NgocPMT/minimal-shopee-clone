import { useParams } from "react-router";
import ColorOptions from "../components/ColorOptions";
import Options from "../components/Options";
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

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          {
            mode: "cors",
          }
        );
        if (!response.ok) {
          throw new Error(`Error:${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("unknown error");
        }
      }
    };
    if (id) fetchProduct();
  }, [id]);

  return (
    <div className="flex flex-col bg-white relative">
      {error && <p>{error}</p>}
      {product && (
        <>
          <img
            src={
              product.image ||
              "https://blocks.astratic.com/img/general-img-landscape.png"
            }
            alt=""
            className="max-h-[27.5rem] object-contain"
          />
          <div className="p-2 mb-6">
            <h5 className="text-black text-xl mb-2">{product.title}</h5>
            <p className="mb-2 text-2xl text-amber-700">{`$${product.price}`}</p>
            <hr className="mb-2" />
            <ColorOptions colors={["black", "white", "blue", "pink"]} />
            <Options title="Size" options={["S", "M", "L"]} />
            <hr className="mt-4" />
            <section>
              <h5 className="text-black text-md font-bold mt-2 mb-1">
                Description
              </h5>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </section>
          </div>
          <div className="fixed bottom-0 left-0 right-0 flex justify-center">
            <button className="py-3 grow cursor-pointer bg-green-600 hover:bg-green-500 text-white">
              Add To Card
            </button>
            <button className="py-3 grow cursor-pointer  bg-amber-700 hover:bg-amber-600 text-white">
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
