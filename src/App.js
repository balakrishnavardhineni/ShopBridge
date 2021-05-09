import "./index.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Inventory from "./Components/Inventory";
import addProduct from "./Components/addProduct";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Inventory} />
        <Route exact path="/add/product" component={addProduct} />
      </Switch>
    </HashRouter>
  );
}
