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
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

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
