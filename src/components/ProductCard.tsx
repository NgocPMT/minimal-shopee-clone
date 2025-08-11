import { Link } from "react-router";

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
      to={`products/${id}`}
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

const starSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-4 text-amber-400"
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"
    ></path>
  </svg>
);

export default ProductCard;
