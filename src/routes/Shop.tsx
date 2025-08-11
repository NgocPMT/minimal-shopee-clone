import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";

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

const Shop = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const filterModalRef = useRef<HTMLDialogElement | null>(null);

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

  const openFilterModal = () => {
    if (!filterModalRef.current) return;
    filterModalRef.current.showModal();
  };

  const closeFilterModal = () => {
    if (!filterModalRef.current) return;
    filterModalRef.current.close();
  };

  return (
    <div>
      <dialog
        ref={filterModalRef}
        className="fixed! left-0 w-full max-w-full! m-0 p-0 top-[20vh] min-h-[80vh] bg-white"
      >
        <div className="flex justify-between p-2 border-b border-gray-300">
          <p className="font-semibold">Filters</p>
          <button onClick={closeFilterModal} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-2">
          <section className="mb-3">
            <h5 className="font-semibold mb-3">Price</h5>
            <div className="flex gap-3 flex-wrap">
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                High to Low
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                Low to High
              </button>
            </div>
          </section>
          <section className="mb-3">
            <h5 className="font-semibold mb-3">Category</h5>
            <div className="flex gap-3 flex-wrap">
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                Men's Clothes
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                Women's Clothes
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                Electronics
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                Accessories
              </button>
            </div>
          </section>
          <section className="mb-3">
            <h5 className="font-semibold mb-3">Rating</h5>
            <div className="flex gap-3 flex-wrap">
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                5 star
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                from 4 star
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                from 3 star
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                from 2 star
              </button>
              <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                from 1 star
              </button>
            </div>
          </section>
          <div className="border-t border-gray-300 absolute bottom-0 left-0 right-0 flex justify-end gap-2 px-2 py-2">
            <button className="py-1.5 px-4 bg-white text-amber-700 border border-amber-700 rounded-sm cursor-pointer hover:bg-gray-100">
              Reset
            </button>
            <button className="py-1.5 px-4 bg-amber-700 text-white rounded-sm cursor-pointer hover:bg-amber-800">
              Apply
            </button>
          </div>
        </div>
      </dialog>
      <div className="min-h-10 bg-white text-amber-700 flex items-center justify-between px-2 py-2.5">
        <Link
          to="/"
          className="p-2 bg-amber-500/10 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <button
          className="relative p-1.5 mr-5 cursor-pointer"
          onClick={openFilterModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          <span className="absolute bottom-0 -right-4 text-xs">Filter</span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
