import "./index.css";
import Card from "../Card/Card";

function ComponenteUno({ prop }) {
  return (
    <div className="ComponenteUno">
      <Card {...prop} />
    </div>
  );
}

export default ComponenteUno;
