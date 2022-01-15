import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route path={"/shop"}>
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
