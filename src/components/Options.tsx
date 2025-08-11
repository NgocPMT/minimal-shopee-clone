import Option from "./Option";
import { useState } from "react";

type OptionProps = {
  title: string;
  options: string[];
};

const Options = ({ title, options }: OptionProps) => {
  const [activeOption, setActiveOption] = useState<string>(options[0]);

  const handleActive = (option: string) => {
    setActiveOption(option);
  };

  return (
    <section>
      <h5 className="font-bold text-black mb-2 text-md">{title}</h5>
      <div className="flex gap-3">
        {options.map((option) => (
          <Option
            key={option}
            text={option}
            active={activeOption === option}
            handleActive={handleActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Options;
