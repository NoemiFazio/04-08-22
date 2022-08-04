import "./index.css";
import ComponenteUno from "../ComponenteUno/ComponenteUno";

function ComponenteDue({ coloreEsadecimale }) {
  return (
    <div className="ComponenteDue">
      <ComponenteUno coloreEsadecimale={coloreEsadecimale} />
    </div>
  );
}

export default ComponenteDue;
