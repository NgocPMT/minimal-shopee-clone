type ColorOptionProps = {
  color: string;
  active?: boolean;
  handleActive: (index: string) => void;
};

const ColorOption = ({
  color,
  active = false,
  handleActive,
}: ColorOptionProps) => {
  const handleClick = () => {
    handleActive(color);
  };
  return (
    <button
      className={`rounded-full cursor-pointer shadow ${
        active
          ? "border-amber-700 ring-2 ring-amber-700"
          : "ring ring-gray-300 hover:ring-2 hover:ring-amber-700 focus:border-amber-700"
      }`}
      onClick={handleClick}
    >
      <div
        className="size-10 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </button>
  );
};

export default ColorOption;
