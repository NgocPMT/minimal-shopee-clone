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
    </div>
  );
};

export default Cart;
