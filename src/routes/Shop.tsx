import { useRef, useState } from "react";
import { Link, Outlet } from "react-router";

const Shop = () => {
  const [isFiltersShow, setIsFiltersShow] = useState<boolean>(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const isMobileView = window.matchMedia("(max-width: 639px)").matches;

  const openFilters = () => {
    if (isFiltersShow) return;
    setIsFiltersShow(true);
  };

  const closeFilters = () => {
    if (!isFiltersShow) return;
    if (!filterRef.current) return;

    filterRef.current.classList.remove(
      isMobileView ? "animate-push-in-bottom" : "animate-push-in-right"
    );
    filterRef.current.classList.add(
      isMobileView ? "animate-push-out-bottom" : "animate-push-out-right"
    );
    setTimeout(() => setIsFiltersShow(false), 350);
  };

  return (
    <div>
      {isFiltersShow && (
        <>
          <div className="fixed left-0 top-0 right-0 bottom-0 bg-black/20 z-10"></div>
          <div
            className={`fixed z-20 p-0 bottom-0 right-0 w-full min-h-[80vh] sm:max-w-[60vw] lg:max-w-[40vw] sm:h-full bg-white ${
              isMobileView ? "animate-push-in-bottom" : "animate-push-in-right"
            }`}
            ref={filterRef}
          >
            <div className="flex justify-between p-2 sm:px-4 border-b border-gray-300">
              <p className="font-semibold">Filters</p>
              <button onClick={closeFilters} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-2 sm:p-4">
              <section className="mb-3">
                <h5 className="font-semibold mb-3">Price</h5>
                <div className="flex gap-3 flex-wrap">
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    High to Low
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    Low to High
                  </button>
                  <form className="flex gap-1 items-center ring ring-gray-300 rounded-md overflow-hidden">
                    <input
                      type="number"
                      placeholder="Min"
                      className="p-2 text-center"
                    />
                    <span className="text-gray-500">---</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="p-2 text-center"
                    />
                  </form>
                </div>
              </section>
              <section className="mb-3">
                <h5 className="font-semibold mb-3">Category</h5>
                <div className="flex gap-3 flex-wrap">
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    Men's Clothes
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    Women's Clothes
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    Electronics
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    Accessories
                  </button>
                </div>
              </section>
              <section className="mb-3">
                <h5 className="font-semibold mb-3">Rating</h5>
                <div className="flex gap-3 flex-wrap">
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    5 star
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    from 4 star
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    from 3 star
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    from 2 star
                  </button>
                  <button className="ring ring-gray-300 hover:ring-amber-700 cursor-pointer rounded-md py-1.5 px-2">
                    from 1 star
                  </button>
                </div>
              </section>
              <div className="border-t border-gray-300 absolute bottom-0 left-0 right-0 flex justify-end gap-2 px-2 py-2">
                <button className="py-1.5 px-4 bg-white text-amber-700 border border-amber-700 rounded-sm cursor-pointer hover:bg-gray-100">
                  Reset
                </button>
                <button className="py-1.5 px-4 bg-amber-700 text-white rounded-sm cursor-pointer hover:bg-amber-800">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="min-h-10 bg-white text-amber-700 flex items-center justify-between px-2 py-2.5">
        <Link
          to="/shop"
          className="p-2 bg-amber-500/10 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <button
          className="relative p-1.5 mr-5 cursor-pointer"
          onClick={openFilters}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          <span className="absolute bottom-0 -right-4 text-xs">Filter</span>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Shop;
