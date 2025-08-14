const ProductDetailSkeleton = () => {
  return (
    <>
      <div className="h-[27.5rem] w-md bg-gray-300 object-contain rounded-lg animate-pulse"></div>
      <div className="p-2 mb-6 md:max-w-[30rem] flex flex-col items-start animate-pulse">
        <h5 className="mb-5 bg-gray-300 w-md h-8 md:mb-2 rounded-lg"></h5>
        <div className="flex justify-between w-full">
          <p className="mb-2 bg-gray-300 w-20 h-6 rounded-lg"></p>
          <p className="bg-gray-300 w-20 h-6 rounded-lg"></p>
        </div>
        <p className="mt-4 mb-2 bg-gray-300 w-20 h-4 rounded-lg"></p>
        <p className="mb-2 bg-gray-300 w-56 h-10 rounded-lg"></p>
        <p className="mb-2 bg-gray-300 w-20 h-4 rounded-lg"></p>
        <p className="mb-2 bg-gray-300 w-56 h-10 rounded-lg"></p>
        <p className="mt-4 mb-2 bg-gray-300 w-20 h-4 rounded-lg"></p>
        <p className="mb-2 bg-gray-300 w-36 h-8 rounded-lg"></p>
        <p className="mt-4 mb-2 bg-gray-300 w-20 h-4 rounded-lg"></p>
        <p className="mb-2 bg-gray-300 w-md h-20 rounded-lg"></p>
        <div className="fixed md:static md:mt-5 md:gap-4 bottom-0 left-0 right-0 flex justify-center md:justify-start">
          <div className="mb-2 bg-gray-300 w-36 h-12 rounded-lg"></div>
          <div className="mb-2 bg-gray-300 w-36 h-12 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailSkeleton;
