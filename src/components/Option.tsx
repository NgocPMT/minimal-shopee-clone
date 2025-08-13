type OptionProps = {
  index: number;
  option: string;
  title: string;
  active?: boolean;
  handleActive: (title: string, active: number) => void;
};

const Option = ({
  index,
  option,
  title,
  active,
  handleActive,
}: OptionProps) => {
  const handleClick = () => {
    handleActive(title, index);
  };

  if (title.toLowerCase() === "color") {
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
          style={{ backgroundColor: option }}
        ></div>
      </button>
    );
  }

  return (
    <button
      className={`bg-white py-1.5 px-3.5 rounded-md font-semibold  cursor-pointer ${
        active
          ? "border-amber-700 ring-2 ring-amber-700"
          : "ring ring-gray-300 hover:ring-2 hover:ring-amber-700 focus:border-amber-700"
      }`}
      onClick={handleClick}
    >
      {option}
    </button>
  );
};

export default Option;
