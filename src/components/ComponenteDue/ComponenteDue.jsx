import "./index.css";
import ComponenteUno from "../ComponenteUno/ComponenteUno";

function ComponenteDue({ children }) {
  return (
    <div className="ComponenteDue">
      <ComponenteUno>{children}</ComponenteUno>
    </div>
  );
}

export default ComponenteDue;
