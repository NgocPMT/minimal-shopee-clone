import Layout from "./Layout";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Shop from "./Shop";
import Cart from "./Cart";
import Products from "../components/Products";
import SearchedProducts from "../components/SearchedProducts";
import ErrorPage from "../components/ErrorPage";
import { Navigate } from "react-router";

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
      { path: "products", element: <Navigate to="/shop" /> },
    ],
  },
];

export default routes;
