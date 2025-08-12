import Layout from "./Layout";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Shop from "./Shop";
import Cart from "./Cart";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "products/:id", element: <ProductDetails /> },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
