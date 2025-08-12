type CartItemProps = {
  id: number;
  image: string;
  title: string;
  variants: string[];
  quantity: number;
  price: number;
  handleMinus: (id: number) => void;
  handlePlus: (id: number) => void;
  handleQuantityInput: (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const CartItem = ({
  id,
  image,
  title,
  variants,
  quantity,
  price,
  handleMinus,
  handlePlus,
  handleQuantityInput,
}: CartItemProps) => {
  const handleMinusClick = () => {
    handleMinus(id);
  };

  const handlePlusClick = () => {
    handlePlus(id);
  };

  const handleQuantityInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleQuantityInput(id, e);
  };

  return (
    <div className="flex pb-2 mb-4 gap-4 items-center justify-between">
      <div className="flex gap-5">
        <div className="size-24 ring ring-amber-700 rounded-md p-1.5">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-start">
          <h5>{title}</h5>
          <p className="text-gray-500">
            {variants.map((variant) => variant).join(", ")}
          </p>
          <div className="flex ring ring-gray-400 justify-center rounded-sm mt-5.5">
            <button
              className="border-r border-gray-400 text-center grow p-0.5 px-1.5"
              onClick={handleMinusClick}
            >
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
              value={quantity}
              className="text-center max-w-12 grow"
              onChange={handleQuantityInputChange}
              min={1}
            />
            <button
              className="border-l border-gray-400 text-center grow p-0.5 px-1.5"
              onClick={handlePlusClick}
            >
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
      <p className="text-amber-700 text-lg">${price}</p>
    </div>
  );
};

export default CartItem;
