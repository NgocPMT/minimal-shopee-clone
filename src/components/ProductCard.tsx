type ProductCardProps = {
  imgURL?: string;
  title: string;
  price: number;
};

const ProductCard = ({
  imgURL = "https://blocks.astratic.com/img/general-img-landscape.png",
  title,
  price,
}: ProductCardProps) => {
  return (
    <div className="bg-white w-full border border-gray-300 hover:border-amber-600 hover:-translate-y-0.5 rounded-sm overflow-hidden">
      <img src={imgURL} alt="" />
      <div className="p-2">
        <h5 className="line-clamp-2">{title}</h5>
        <p className="text-amber-700">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
