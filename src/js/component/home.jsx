import React, { useState } from "react";

export function Home() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  const getButtonClassName = (color) => {
    let className = "light " + color;
    if (selectedColor === color) {
      className += " glow";
    }
    return className;
  };

  return (
    <div className="container">
      <div className="pole"></div>
      <div className="traffic-light">
        <div
          onClick={() => handleClick("red")}
          className={getButtonClassName("red")}
        ></div>
        <div
          onClick={() => handleClick("yellow")}
          className={getButtonClassName("yellow")}
        ></div>
        <div
          onClick={() => handleClick("green")}
          className={getButtonClassName("green")}
        ></div>
      </div>
    </div>
  );
}

export default Home;



