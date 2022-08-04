import "./index.css";
import ComponenteTre from "../ComponenteTre/ComponenteTre";

function CardList({ prop }) {
  return (
    <div className="CardList">
      <ComponenteTre coloreEsadecimale={prop} />
    </div>
  );
}

export default CardList;
