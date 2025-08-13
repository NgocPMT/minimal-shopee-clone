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
  return (
    <div className="flex pb-2 mb-4 gap-4 items-center justify-between">
      <div className="flex gap-5">
        <div className="size-24 ring ring-amber-700 rounded-md p-1.5">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-start">
          <h5>{title}</h5>
          <p className="text-gray-500 mb-5.5">
            {variants.map((variant) => variant).join(", ")}
          </p>
          <QuantityInput
            size={3}
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
