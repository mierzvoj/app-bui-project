import { Link } from "react-router-dom";
import "./App.css";
import Items from "./pages/Cascading/Items/Items";

function App() {
  return (
    <div className="App">
      <Items />
      <br />
      <Link to="/pokemons">Pokemons</Link>
    </div>
  );
}

export default App;
