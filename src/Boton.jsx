import React, { useState } from "react";

function Boton({ texto, onClick, estilo }) {
  const [brilla, setBrilla] = useState(false);

  // Colores de fondo y brillo según el botón
  let bgColor, glowColor;
  if (texto === "Aumentar") {
    bgColor = "#2ecc71";
    glowColor = "lime";
  } else if (texto === "Disminuir") {
    bgColor = "#e74c3c";
    glowColor = "red";
  } else if (texto === "Reset") {
    bgColor = "#95a5a6";
    glowColor = "white";
  }

  const manejarClick = () => {
    setBrilla(true);
    setTimeout(() => setBrilla(false), 500);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={manejarClick}
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        boxShadow: brilla
          ? `0 0 10px 2px ${glowColor}, 0 0 20px 4px ${glowColor}, 0 0 30px 6px ${glowColor}`
          : "none",
        transform: brilla ? "scale(1.15)" : "scale(1)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        ...estilo,
      }}
    >
      {texto}
    </button>
  );
}

export default Boton;