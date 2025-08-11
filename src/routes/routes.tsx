import Layout from "./Layout";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Shop from "./Shop";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <p>Card</p> },
      { path: "products/:id", element: <ProductDetails /> },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
