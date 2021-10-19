import { useState, useEffect } from "react";

interface fruitInt {
  price: number;
  name: string;
}

const useFruits = () => {
  const [fruits, setFruits] = useState<fruitInt[]>([]);

  useEffect(() => {
    fetch("/products")
      .then((res: Response) => res.json())
      .then((json) => setFruits(json));
  }, []);

  return fruits;
};

export default useFruits;
