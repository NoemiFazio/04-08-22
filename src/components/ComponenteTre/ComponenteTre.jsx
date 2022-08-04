import "./index.css";
import ComponenteDue from "../ComponenteDue/ComponenteDue";

function ComponenteTre({ children }) {
  return (
    <div className="ComponenteTre">
      <ComponenteDue>{children}</ComponenteDue>
    </div>
  );
}

export default ComponenteTre;
