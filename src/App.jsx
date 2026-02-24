import { useState } from "react";
import Boton from "./Boton";
function App() {
  // Creamos el estado del contador, empieza en 0
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mi contador en React 🚀</h1>
      <h2>{contador}</h2>

      <Boton
  texto="Aumentar"
  onClick={() => setContador(prev => prev + 1)}
/>

<Boton
  texto="Disminuir"
  onClick={() => setContador(prev => (prev > 0 ? prev - 1 : 0))}
  estilo={{ marginLeft: "10px" }}
/>

<Boton
  texto="Reset"
  onClick={() => setContador(0)}
  estilo={{ marginLeft: "10px" }}
/>


      {contador === 10 && <p>¡Llegaste a 10! 🎉</p>}
    </div>
  );
}

export default App;
