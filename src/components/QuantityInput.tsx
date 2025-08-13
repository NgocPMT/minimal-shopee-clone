type QuantityInputProps = {
  size: number;
  quantity: number;
  id: number;
  handleMinus: (id: number) => void;
  handlePlus: (id: number) => void;
  handleQuantityInput: (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const QuantityInput = ({
  size,
  quantity,
  id,
  handleMinus,
  handlePlus,
  handleQuantityInput,
}: QuantityInputProps) => {
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

  const px = size / 2;
  const py = px - 1;

  return (
    <div className="flex ring ring-gray-400 justify-center rounded-sm">
      <button
        className={`border-r border-gray-400 text-center grow p-${py} px-${px} cursor-pointer disabled:bg-gray-300 disabled:cursor-auto`}
        onClick={handleMinusClick}
        disabled={quantity <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-${size}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
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
        className={`border-l border-gray-400 text-center grow p-${py} px-${px} cursor-pointer`}
        onClick={handlePlusClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-${size}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuantityInput;
