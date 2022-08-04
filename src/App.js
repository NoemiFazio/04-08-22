import "./App.css";
import CardList from "./components/CardList/CardList";

function App(coloreEsadecimale) {
  return (
    <div className="App">
      <CardList {...coloreEsadecimale} />
    </div>
  );
}

export default App;
