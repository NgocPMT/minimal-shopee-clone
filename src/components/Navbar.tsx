import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [prevSearchInput, setPrevSearchInput] = useState<string>("");
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  if (!cart) {
    throw new Error("CartList must be used within CartProvider");
  }
  const cartArticles = cart.cartItems.length;

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput.trim().length === 0) return;
    if (searchInput === prevSearchInput) return;
    navigate(`/shop/search/${searchInput}`, { replace: true });
    setPrevSearchInput(searchInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleSearch();
  };

  return (
    <nav className="bg-amber-700 text-amber-50 flex justify-center sm:justify-between items-center gap-4 py-2.5 pl-6 sm:pl-4 pr-4">
      <Link to="/" className="text-lg font-bold max-sm:hidden">
        Shopeefy
      </Link>
      <div className="flex items-center bg-amber-50 gap-1.5 text-gray-700 py-1 px-2 w-full max-w-[40rem] rounded-sm">
        <button className="cursor-pointer" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <input
          type="text"
          value={searchInput}
          placeholder="What do you want to buy?"
          onChange={handleSearchInput}
          onKeyDown={handleKeyDown}
          className="placeholder:text-amber-700 focus:outline-0 text-sm p-0.5 grow"
        />
      </div>
      <Link to="cart" className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-amber-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {cartArticles > 0 && (
          <span className="absolute -right-1.5 -top-1.5 z-10 bg-amber-50 text-amber-800 text-xs rounded-full size-4 grid place-content-center">
            {cartArticles}
          </span>
        )}
      </Link>
      {/* <Link to="#">
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
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </Link> */}
    </nav>
  );
};

export default Navbar;
