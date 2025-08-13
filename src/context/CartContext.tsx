import { createContext } from "react";

interface CartProduct {
  id: number;
  image: string;
  title: string;
  variants: string[];
  quantity: number;
  price: number;
}

interface CartContextType {
  cartItems: CartProduct[];
  setCartItems: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
