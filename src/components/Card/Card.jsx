import "./index.css";
import { coloreEsadecimale } from "../api/api";

function Card() {
  return (
    <div className="Card">
      <div className="Pantone" style={{ backgroundColor: coloreEsadecimale }} />
      <h3 className="Pantone__colour">{coloreEsadecimale}</h3>
    </div>
  );
}

export default Card;
