import React, { useState } from "react";

function ColorBox() {
  const [bgColor, setBgColor] = useState("#FFC0CB"); // Rose

  const changeColor = () => {
    setBgColor(bgColor === "#FFC0CB" ? "#00FF00" : "#FFC0CB"); // Rouge → Vert et inversement
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: bgColor,
          margin: "10px auto",
          borderRadius: "10px",
          border: "2px solid #000",
          transition: "0.5s ease-in-out", // Ajoute une transition fluide
        }}
      ></div>
      <button
        onClick={changeColor}
        style={{ padding: "10px 15px", cursor: "pointer" }}
      >
        Changer de couleur
      </button>
    </div>
  );
}

export default ColorBox;
