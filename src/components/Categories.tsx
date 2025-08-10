import CategoryLink from "./CategoryLink";

const Categories = () => {
  return (
    <section className="flex justify-center items-center gap-5 p-4 pt-6 bg-white">
      <CategoryLink to="#" icon={MenSvg} text="Men Clothes" />
      <CategoryLink to="#" icon={WomenSvg} text="Women Clothes" />
      <CategoryLink to="#" icon={ElectronicsSvg} text="Electronics" />
      <CategoryLink to="#" icon={AccessoriesSvg} text="Accessories" />
    </section>
  );
};

const AccessoriesSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="size-7"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
    >
      <circle cx="25" cy="29" r="15"></circle>
      <path d="m18 8l3-4h8.054L32 8l-7 6z"></path>
    </g>
  </svg>
);

const ElectronicsSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-7"
  >
    <path
      fill="currentColor"
      d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"
    ></path>
  </svg>
);

const WomenSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="size-7"
  >
    <path
      fill="currentColor"
      d="M218.38 208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193 82.56c.06-.09.12-.18.17-.27a20 20 0 0 0 0-20.58c-.14-.24-.3-.48-.46-.71L172 31.44V12a12 12 0 0 0-24 0v19l-4.38 5.47a20 20 0 0 1-31.24 0L108 31V12a12 12 0 0 0-24 0v19.44L63.31 61c-.16.23-.32.47-.46.71a20 20 0 0 0 0 20.58c0 .09.11.18.17.27l19.31 30.32l-44.54 94.87c-.06.12-.11.25-.17.37A20 20 0 0 0 56 236h144a20 20 0 0 0 18.39-27.88ZM128 68a43.75 43.75 0 0 0 31.21-13l12 17.1l-17.79 27.9h-50.84L84.82 72.12l12-17.1A43.75 43.75 0 0 0 128 68M62.31 212l41.31-88h48.76l41.31 88Z"
    ></path>
  </svg>
);

const MenSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="size-7"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m15.177 3.089l-3.544-1.772A3 3 0 0 0 10.292 1h-.877a1.5 1.5 0 0 1-2.83 0h-.877a3 3 0 0 0-1.341.317L.823 3.088a1 1 0 0 0-.481 1.266l1.295 3.237a1 1 0 0 0 1.28.565l.351-.132l-.188 4.9A2 2 0 0 0 5.078 15h5.844a2 2 0 0 0 1.998-2.077l-.188-4.899l.352.132a1 1 0 0 0 1.28-.565l1.294-3.237a1 1 0 0 0-.481-1.266M5.764 2.5h-.056a1.5 1.5 0 0 0-.67.158L1.904 4.224l.943 2.356l2.006-.752l-.275 7.153a.5.5 0 0 0 .5.519h5.843a.5.5 0 0 0 .5-.52l-.276-7.152l2.006.752l.943-2.356l-3.132-1.566a1.5 1.5 0 0 0-.671-.158h-.056A3 3 0 0 1 8 3.5a3 3 0 0 1-2.236-1"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Categories;
