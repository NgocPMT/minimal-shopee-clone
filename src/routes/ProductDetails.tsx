import { useParams } from "react-router";
import Options from "../components/Options";
import { useEffect, useState, useContext } from "react";
import starSvg from "../assets/starSvg";
import { CartContext } from "../context/CartContext";
import ProductDetailSkeleton from "../components/ProductDetailsSkeleton";
import Breadcrumbs from "../components/Breadcrumbs";
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
  const [loading, setLoading] = useState(true);
  const [toastIds, setToastIds] = useState<number[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const variants = [
    { title: "Color", list: ["black", "white", "blue", "pink"] },
    { title: "Size", list: ["S", "M", "L"] },
  ];
  const [variantActives, setVariantActives] = useState(
    variants.map((variant) => {
      return { title: variant.title, active: 0 };
    })
  );
  const cartVariants = variants.map((variant, index) => {
    const activeIndex = variantActives[index].active;
    return variant.list[activeIndex];
  });
  console.log(cartVariants);
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartList must be used within CartProvider");
  }

  const { cartItems, setCartItems } = cart;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          {
            mode: "cors",
            signal,
          }
        );
        if (!response.ok) {
          throw new Error(`Error:${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError((err as Error).message);
        }
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
    return () => {
      controller.abort();
    };
  }, [id]);

  const handleMinusClick = () => {
    if (quantity <= 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleVariantActives = (title: string, active: number) => {
    setVariantActives(
      variantActives.map((variantActive) =>
        variantActive.title === title
          ? { ...variantActive, active }
          : variantActive
      )
    );
  };

  const Toast = ({ id }: { id: number }) => (
    <div className="py-2 px-3 bg-green-600 text-white rounded-md flex items-center gap-3 max-w-72 mb-2 relative">
      <div className="w-1/4 max-h-14 bg-white py-1 px-2 rounded-sm">
        <img src={product?.image} alt="" className="size-12 object-contain" />
      </div>
      <div className="w-3/4 mr-4">
        <p className="font-bold line-clamp-1">{product?.title}</p>
        <p>added to cart.</p>
      </div>
      <button
        className="absolute top-0.5 right-0.5 cursor-pointer"
        onClick={() => closeToast(id)}
      >
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
  );

  const openToast = (timeout: number = 5000) => {
    const id = Date.now();
    setToastIds((prevToasts) => [...prevToasts, id]);
    setTimeout(() => closeToast(id), timeout);
  };

  const closeToast = (id: number) => {
    setToastIds((prevToasts) => prevToasts.filter((toastId) => toastId !== id));
  };

  const handleAddToCart = () => {
    if (!product) return;
    const { id, title, image, price } = product;
    const addingProduct = cartItems.find(
      (item) =>
        item.id === id && item.variants.toString() === cartVariants.toString()
    );
    if (!addingProduct) {
      setCartItems([
        ...cartItems,
        { id, title, image, price, variants: cartVariants, quantity },
      ]);
    } else {
      const newQuantity = addingProduct.quantity + quantity;
      setCartItems(
        cartItems.map((item) =>
          item.id === id && item.variants.toString() === cartVariants.toString()
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
    openToast();
  };

  return (
    <div className="bg-white">
      <Breadcrumbs />
      <div className="fixed md:absolute top-16 right-4 max-h-[24.5rem] overflow-hidden z-20">
        {toastIds.map((toastId) => (
          <Toast id={toastId} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:min-w-[75vw] md:items-center md:justify-center md:gap-20 md:px-5 relative z-10">
        {loading && <ProductDetailSkeleton />}
        {error && <p>{error}</p>}
        {product && (
          <>
            <div className="h-[27.5rem] max-w-96 mx-auto md:mx-0">
              <img
                src={
                  product.image ||
                  "https://blocks.astratic.com/img/general-img-landscape.png"
                }
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 mb-6 md:max-w-[30rem] flex flex-col items-start">
              <h5 className="text-black text-xl mb-5 md:font-bold md:mb-2">
                {product.title}
              </h5>
              <div className="flex justify-between w-full">
                <p className="mb-2 text-2xl text-amber-700">{`$${product.price}`}</p>
                <p className="flex items-center text-lg text-gray-500">
                  {product.rating.rate}
                  {starSvg}
                  <span>({product.rating.count} rated)</span>
                </p>
              </div>
              <hr className="mb-2 w-full" />
              {variants.map((variant, index) => {
                const activeIndex = variantActives[index].active;
                return (
                  <Options
                    title={variant.title}
                    activeIndex={activeIndex}
                    options={variant.list}
                    handleVariantActives={handleVariantActives}
                  />
                );
              })}
              <h5 className="font-bold text-black mb-2 text-md">Quantity</h5>
              <div className="flex ring ring-gray-400 justify-center rounded-sm">
                <button
                  className="border-r border-gray-400 text-center grow py-1.5 px-2.5 cursor-pointer disabled:bg-gray-300 disabled:cursor-auto"
                  onClick={handleMinusClick}
                  disabled={quantity <= 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  value={quantity}
                  className="text-center max-w-12 grow"
                  onChange={handleQuantityInputChange}
                  min={1}
                />
                <button
                  className="border-r border-gray-400 text-center grow py-1.5 px-2.5 cursor-pointer disabled:bg-gray-300 disabled:cursor-auto"
                  onClick={handlePlusClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
              <hr className="mt-4 w-full" />
              <section>
                <h5 className="text-black text-md font-bold mt-2 mb-1">
                  Description
                </h5>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </section>
              <div className="fixed md:static md:mt-5 md:gap-4 bottom-0 left-0 right-0 flex justify-center md:justify-start">
                <button
                  className="py-3 grow md:grow-0 md:py-2.5 md:px-4 md:rounded-md  cursor-pointer bg-green-600 hover:bg-green-500 text-white flex gap-2 items-center justify-center"
                  onClick={handleAddToCart}
                >
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
