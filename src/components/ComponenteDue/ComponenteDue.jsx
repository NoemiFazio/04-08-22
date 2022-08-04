import "./index.css";
import ComponenteUno from "../ComponenteUno/ComponenteUno";

function ComponenteDue({ prop }) {
  return (
    <div className="ComponenteDue">
      <ComponenteUno {...prop} />
    </div>
  );
}

export default ComponenteDue;
