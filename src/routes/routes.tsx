import Layout from "./Layout";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <p>Card</p> },
      { path: "product/:productId", element: <ProductDetails /> },
    ],
  },
];

export default routes;
