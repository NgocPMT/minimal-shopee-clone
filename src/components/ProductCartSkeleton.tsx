const ProductCartSkeleton = () => {
  return (
    <div className="bg-white duration-150 w-full max-w-80 border border-gray-300 hover:border-2 hover:border-amber-600 hover:-translate-y-0.5 rounded-md overflow-hidden flex flex-col min-h-72">
      <div className="w-full h-[65%] object-contain bg-gray-300  animate-pulse" />
      <div className="p-2 flex flex-col justify-between grow-1 mt-1">
        <div className="line-clamp-2 bg-gray-300  w-full h-7 rounded-lg animate-pulse"></div>
        <div className="flex justify-between items-center">
          <div className="text-amber-700 bg-gray-300  w-20 h-5 rounded-lg  animate-pulse"></div>
          <div className="flex items-center bg-gray-300 w-20 h-5 rounded-lg  animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartSkeleton;
