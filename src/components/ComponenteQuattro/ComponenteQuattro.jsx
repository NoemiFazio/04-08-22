import "./index.css";
import ComponenteTre from "../ComponenteTre/ComponenteTre";

function ComponenteQuattro({ children }) {
  return (
    <div className="ComponenteQuattro">
      <ComponenteTre>{children}</ComponenteTre>
    </div>
  );
}

export default ComponenteQuattro;
