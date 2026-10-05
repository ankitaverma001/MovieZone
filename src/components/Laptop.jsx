import React from "react";
import "./Laptop.css";

const Laptop = ({ brandName, model, price }) => {
  // Internal styling
  const obj = {
    backgroundColor: "Blue",
    padding: "2px",
    margin: "2px",
    borderRadius: "2px",
    border: "2px solid yellow",
  };
  return (
    <div
      //Inline css styling

    //   style={{
    //     backgroundColor: "Grey",
    //     padding: "10px",
    //     margin: "10px",
    //     borderRadius: "10px",
    //     border: "2px solid red",
    //   }}
    // style={obj}
    className="div"
    >
      <h3>{brandName}</h3>
      <h3>{model}</h3>
      <h3>Price: ${price}</h3>
    </div>
  );
};

export default Laptop;
