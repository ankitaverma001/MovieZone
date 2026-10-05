import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState({
    name: "Samsung Galaxy S24 Ultra",
    price: 150000,
    brand: "Samsung",
  });

  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseByOne}>Increase</button>
      <button onClick={decreaseByOne}>Decrease</button>
      <h2>{product.brand}</h2>
    </div>
  );
};

export default Counter;
