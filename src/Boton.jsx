function Boton({ texto, onClick, estilo }) {
  // Elegimos color según el texto del botón
  let bgColor;
  if (texto === "Aumentar") bgColor = "green";
  else if (texto === "Disminuir") bgColor = "red";
  else if (texto === "Reset") bgColor = "gray";

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        ...estilo // esto permite agregar estilos adicionales desde App.jsx
      }}
    >
      {texto}
    </button>
  );
}

export default Boton;