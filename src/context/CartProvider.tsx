import { useMemo, useState, type ReactNode } from "react";

import { CartContext } from "./CartContext";

interface CartProduct {
  id: number;
  image: string;
  title: string;
  variants: string[];
  quantity: number;
  price: number;
}

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      variants: ["XS", "Black"],
      quantity: 1,
      price: 109.95,
    },
    {
      id: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      title: "Fjallraven - Foldsack No. 2 Backpack, Fits 15 Laptops",
      variants: ["XS", "Pink"],
      quantity: 1,
      price: 99.95,
    },
  ]);

  const cart = useMemo(
    () => ({
      cartItems,
      setCartItems,
    }),
    [cartItems]
  );

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
export default CartProvider;
