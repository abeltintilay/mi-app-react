function Boton({ texto, onClick, estilo }) {
  return (
    <button onClick={onClick} style={estilo}>
      {texto}
    </button>
  );
}

export default Boton;
