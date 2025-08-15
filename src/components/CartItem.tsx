import QuantityInput from "./QuantityInput";

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
  handleClick: () => void;
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
  handleClick,
}: CartItemProps) => {
  return (
    <div className="flex pb-2 mb-4 gap-4 items-center justify-between">
      <div className="flex gap-5">
        <div className="size-24 ring ring-amber-700 rounded-md p-1.5 relative">
          <img src={image} alt="" className="w-full h-full object-contain" />
          <button
            onClick={handleClick}
            className="absolute -top-3 -left-3 ring ring-red-300 rounded-sm bg-red-100 hover:bg-gray-300 z-10 text-red-700 p-0.5 cursor-pointer"
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start">
          <h5 className="line-clamp-1">{title}</h5>
          <p className="text-gray-500 mb-5.5 capitalize">
            {variants.map((variant) => variant).join(", ")}
          </p>
          <QuantityInput
            size={4}
            id={id}
            quantity={quantity}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
            handleQuantityInput={handleQuantityInput}
          />
        </div>
      </div>
      <p className="text-amber-700 text-lg">${price}</p>
    </div>
  );
};

export default CartItem;
