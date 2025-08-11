type OptionProps = {
  text: string;
  active?: boolean;
  handleActive: (text: string) => void;
};

const Option = ({ text, active, handleActive }: OptionProps) => {
  const handleClick = () => {
    handleActive(text);
  };

  return (
    <button
      className={`bg-white py-1.5 px-3.5 rounded-md font-semibold  cursor-pointer ${
        active
          ? "border-amber-700 ring-2 ring-amber-700"
          : "ring ring-gray-300 hover:ring-2 hover:ring-amber-700 focus:border-amber-700"
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Option;
