import { useState, useEffect } from "react";
import Boton from "./Boton";

function App() {
  const [contador, setContador] = useState(0);
  const [celebrando, setCelebrando] = useState(false);

  // Activar animación cuando llega a 10
  useEffect(() => {
    if (contador === 10) {
      setCelebrando(true);
      const timer = setTimeout(() => setCelebrando(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [contador]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mi contador en React 🚀</h1>
      <h2
        style={{
          display: "inline-block",
          fontSize: "3rem",
          transition: "transform 0.3s, color 0.3s",
          transform: celebrando ? "scale(1.5)" : "scale(1)",
          color: celebrando ? "orange" : "black",
          textShadow: celebrando
            ? "0 0 10px orange, 0 0 20px yellow"
            : "none",
        }}
      >
        {contador}
      </h2>

      <div style={{ marginTop: "20px" }}>
        <Boton
          texto="Aumentar"
          onClick={() => setContador((prev) => prev + 1)}
        />
        <Boton
          texto="Disminuir"
          onClick={() =>
            setContador((prev) => (prev > 0 ? prev - 1 : 0))
          }
          estilo={{ marginLeft: "10px" }}
        />
        <Boton
          texto="Reset"
          onClick={() => setContador(0)}
          estilo={{ marginLeft: "10px" }}
        />
      </div>

      {contador === 10 && <p>¡Llegaste a 10! 🎉</p>}
    </div>
  );
}

export default App;