import { useParams } from "react-router";
import ColorOptions from "../components/ColorOptions";
import Options from "../components/Options";
import { useEffect, useState } from "react";
import starSvg from "../assets/starSvg";
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
    <div className="flex flex-col md:flex-row md:min-w-[75vw] md:items-center md:justify-center md:gap-20 md:px-5 bg-white relative">
      {error && <p>{error}</p>}
      {product && (
        <>
          <img
            src={
              product.image ||
              "https://blocks.astratic.com/img/general-img-landscape.png"
            }
            alt=""
            className="max-h-[27.5rem] object-contain md:"
          />
          <div className="p-2 mb-6 max-w-[30rem]">
            <h5 className="text-black text-xl mb-5 md:font-bold md:mb-2">
              {product.title}
            </h5>
            <div className="flex justify-between">
              <p className="mb-2 text-2xl text-amber-700">{`$${product.price}`}</p>
              <p className="flex items-center text-lg text-gray-500">
                {product.rating.rate}
                {starSvg}
                <span>({product.rating.count} rated)</span>
              </p>
            </div>
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
            <div className="fixed md:static md:mt-5 md:gap-4 bottom-0 left-0 right-0 flex justify-center md:justify-start">
              <button className="py-3 grow md:grow-0 md:py-2.5 md:px-4 md:rounded-md  cursor-pointer bg-green-600 hover:bg-green-500 text-white flex gap-2 items-center justify-center">
                Add To Card {addToCartSvg}
              </button>
              <button className="py-3 grow md:grow-0 md:py-2.5 md:px-4 md:rounded-md cursor-pointer  bg-amber-700 hover:bg-amber-600 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const addToCartSvg = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-5 text-white"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z"
        fill="currentColor"
      ></path>{" "}
    </g>
  </svg>
);

export default ProductDetails;
