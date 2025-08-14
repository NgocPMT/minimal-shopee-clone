import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
          signal,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError((err as Error).message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { products, error, loading };
};

export default useProducts;
