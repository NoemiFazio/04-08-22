import "./index.css";

function Card({ coloreEsadecimale }) {
  return (
    <div className="Card">
      <div className="Pantone" style={{ backgroundColor: coloreEsadecimale }} />
      <h3 className="Pantone__colour">{coloreEsadecimale}</h3>
    </div>
  );
}

export default Card;
