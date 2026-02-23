import { useState } from "react";

function App() {
  // Creamos el estado del contador, empieza en 0
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mi contador en React 🚀</h1>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador > 0 ? contador - 1 : 0)}style={{ marginLeft: "10px" }}>Disminuir</button>
      {contador === 10 && <p>¡Llegaste a 10! 🎉</p>}
    </div>
  );
}

export default App;