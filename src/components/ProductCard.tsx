import { Link } from "react-router";
import starSvg from "../assets/starSvg";

type ProductCardProps = {
  id: number;
  image?: string;
  title: string;
  price: number;
  rating: { count: number; rate: number };
};

const ProductCard = ({
  id,
  image = "https://blocks.astratic.com/img/general-img-landscape.png",
  title,
  price,
  rating,
}: ProductCardProps) => {
  return (
    <Link
      to={`/products/${id}`}
      className="bg-white w-full max-w-80 border border-gray-300 hover:border-2 hover:border-amber-600 hover:-translate-y-0.5 rounded-md overflow-hidden flex flex-col max-h-72"
    >
      <img src={image} alt="" className="w-full h-[65%] object-contain " />
      <div className="p-2 flex flex-col justify-between grow-1">
        <h5 className="line-clamp-2 text-sm text-black sm:text-md">{title}</h5>
        <div className="flex justify-between items-center">
          <p className="text-amber-700 text-lg">${price}</p>
          <p className="flex items-center text-md text-gray-600">
            {rating.rate}
            {starSvg}({rating.count})
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
