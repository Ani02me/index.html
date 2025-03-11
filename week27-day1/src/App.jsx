import { useState } from "react";

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
};

const RandomColorBox = () => {
  const [color, setColor] = useState(getRandomColor());

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          margin: "auto",
          fontSize: "20px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {color}
      </div>
      <button
        onClick={changeColor}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Түсті өзгерту
      </button>
    </div>
  );
};

export default RandomColorBox;
