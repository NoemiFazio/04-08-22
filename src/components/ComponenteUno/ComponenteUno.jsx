import "./index.css";
import Card from "../Card/Card";

function ComponenteUno({ coloreEsadecimale }) {
  return (
    <div className="ComponenteUno">
      <Card coloreEsadecimale={coloreEsadecimale} />
    </div>
  );
}

export default ComponenteUno;
