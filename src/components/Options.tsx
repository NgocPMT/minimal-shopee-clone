import Option from "./Option";

type OptionProps = {
  title: string;
  options: string[];
  activeIndex: number;
  handleVariantActives: (title: string, active: number) => void;
};

const Options = ({
  title,
  options,
  activeIndex,
  handleVariantActives,
}: OptionProps) => {
  return (
    <section className="mb-2.5">
      <h5 className="font-bold text-black mb-2 text-md">{title}</h5>
      <div className="flex gap-3">
        {options.map((option, index) => (
          <Option
            index={index}
            key={option}
            option={option}
            title={title}
            active={activeIndex === index}
            handleActive={handleVariantActives}
          />
        ))}
      </div>
    </section>
  );
};

export default Options;
