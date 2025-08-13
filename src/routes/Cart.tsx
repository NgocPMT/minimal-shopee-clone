import { Link } from "react-router";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartList must be used within CartProvider");
  }

  const { cartItems, setCartItems } = cart;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleMinus = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === id
          ? {
              ...prevItem,
              quantity:
                prevItem.quantity > 1
                  ? prevItem.quantity - 1
                  : prevItem.quantity,
            }
          : prevItem
      )
    );
  };

  const handlePlus = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  };

  const handleQuantityInput = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity <= 0) return;
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === id ? { ...prevItem, quantity: newQuantity } : prevItem
      )
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between py-2 px-6 border-b border-gray-400">
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
        <span className="font-bold text-lg">Cart</span>
      </div>
      {cartItems.length > 0 ? (
        <div className="m-4 ring ring-gray-400 rounded-lg min-h-96 p-6 flex flex-col justify-between max-w-3xl md:mx-auto sm:mt-8">
          {cartItems.map((item) => (
            <CartItem
              id={item.id}
              image={item.image}
              title={item.title}
              variants={item.variants}
              quantity={item.quantity}
              price={item.price}
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              handleQuantityInput={handleQuantityInput}
            />
          ))}
          <hr />
          <div className="pt-2 text-gray-500 flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>-</p>
            </div>
          </div>
          <div className="flex justify-between pt-2 text-xl font-semibold">
            <h2 className="">Total</h2>
            <p className="text-amber-700">${subtotal.toFixed(2)}</p>
          </div>
          <button className="w-full sm:w-auto sm:self-end bg-amber-700 text-white py-2 sm:px-6 rounded-md mt-6 text-lg cursor-pointer hover:bg-amber-800">
            Checkout
          </button>
        </div>
      ) : (
        <div className="pt-15 px-4 sm:mx-auto flex flex-col items-center">
          <svg
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 231.523 231.523"
            xmlSpace="preserve"
            className="size-36 text-amber-700 mb-10"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231 l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z"></path>{" "}
                <path d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468 c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468 C147.235,148.377,150.23,152.062,154.351,152.488z"></path>{" "}
                <path d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221 c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523 c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215 C104.494,212.835,100.808,216.523,96.278,216.523z"></path>{" "}
                <path d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221 c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523 c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215 C181.937,212.835,178.251,216.523,173.719,216.523z"></path>{" "}
                <path d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876 c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046 c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z"></path>{" "}
                <path d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607 L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z"></path>{" "}
                <path d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606 c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607 C155.338,54.314,157.256,55.045,159.174,55.045z"></path>{" "}
                <path d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502 c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <h1 className="font-bold text-xl lg:text-3xl ml-4 mb-4">
            Your shopping cart is empty.
          </h1>
          <p className="ml-5 text-center">
            Let explore our{" "}
            <Link to="/shop" className="underline text-amber-700 text-lg">
              amazing products
            </Link>{" "}
            and add something to your cart!
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
