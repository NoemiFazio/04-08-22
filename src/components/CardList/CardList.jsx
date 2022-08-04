import "./index.css";
import ComponenteTre from "../ComponenteTre/ComponenteTre";

function CardList({ coloreEsadecimale }) {
  return (
    <div className="CardList">
      <ComponenteTre coloreEsadecimale={coloreEsadecimale} />
    </div>
  );
}

export default CardList;
