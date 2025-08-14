import Layout from "./Layout";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Shop from "./Shop";
import Cart from "./Cart";
import Products from "../components/Products";
import SearchedProducts from "../components/SearchedProducts";
import ErrorPage from "../components/ErrorPage";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "products/:id", element: <ProductDetails /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <Products /> },
          { path: "search/:query", element: <SearchedProducts /> },
        ],
      },
    ],
  },
];

export default routes;
