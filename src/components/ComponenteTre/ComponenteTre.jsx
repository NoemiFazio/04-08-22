import "./index.css";
import ComponenteDue from "../ComponenteDue/ComponenteDue";

function ComponenteTre({ prop }) {
  return (
    <div className="ComponenteTre">
      <ComponenteDue {...prop} />
    </div>
  );
}

export default ComponenteTre;
