import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("Button clicked");

    const addition = (a) => {
      alert(a + 10);
    };
  };
  return (
    <div>
      <h1> We are learning events</h1>
      <button onMouseOver={handleClick}>Click me</button>
      <button onClick={() => addition(100)}>button2</button>
    </div>
  );
};

export default Events;
