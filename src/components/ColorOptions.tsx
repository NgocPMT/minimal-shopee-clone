import { useState } from "react";
import ColorOption from "./ColorOption";

type ColorOptionsProps = {
  colors: string[];
};

const ColorOptions = ({ colors }: ColorOptionsProps) => {
  const [activeColor, setActiveColor] = useState<string>(colors[0]);

  const handleActive = (color: string) => setActiveColor(color);

  return (
    <section className="mb-3">
      <h5 className="font-bold text-black mb-2 text-lg">Color</h5>
      <div className="flex gap-3">
        {colors.map((color) => (
          <ColorOption
            key={color}
            color={color}
            active={activeColor === color}
            handleActive={handleActive}
          />
        ))}
      </div>
    </section>
  );
};

export default ColorOptions;
