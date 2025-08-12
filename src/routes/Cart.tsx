import { Link } from "react-router";

const Cart = () => {
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
        <div className="flex pb-2 mb-4 gap-4 items-center justify-between">
          <div className="flex gap-5">
            <div className="size-24 bg-black"></div>
            <div>
              <h5>Men T-Shirt</h5>
              <p className="text-gray-500">XS</p>
              <div className="flex ring ring-gray-400 justify-center rounded-sm mt-5.5">
                <button className="border-r border-gray-400 text-center grow p-0.5 px-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
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
                  value={1}
                  className="text-center max-w-12 grow"
                />
                <button className="border-l border-gray-400 text-center grow p-0.5 px-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p className="text-amber-700 text-lg">$199.00</p>
        </div>
        <hr />
        <div className="pt-2 text-gray-500 flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$199.00</p>
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
          <p className="text-amber-700">$199.00</p>
        </div>
        <button className="w-full sm:w-auto sm:self-end bg-amber-700 text-white py-2 sm:px-6 rounded-md mt-6 text-lg cursor-pointer hover:bg-amber-800">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
