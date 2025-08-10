import { Link } from "react-router";
import ProductCard from "./ProductCard";

const Recommended = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-between px-3 py-2">
        <h2 className="text-amber-700">RECOMMENDED</h2>
        <Link to="#" className="text-gray-500 hover:text-black text-sm">
          More &gt;
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 min-h-50 bg-gray-200 px-1 py-2">
        <ProductCard
          title="A Very Cool And Expensive T-Shirt I Guess I Add More Text For No Reason"
          price={500}
        />
        <ProductCard
          title="A Very Cool And Expensive T-Shirt I Guess I Add More Text For No Reason"
          price={500}
        />
        <ProductCard
          title="A Very Cool And Expensive T-Shirt I Guess I Add More Text For No Reason"
          price={500}
        />
        <ProductCard
          title="A Very Cool And Expensive T-Shirt I Guess I Add More Text For No Reason"
          price={500}
        />
      </div>
    </section>
  );
};

export default Recommended;
