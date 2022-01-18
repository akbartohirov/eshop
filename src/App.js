import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-ip/sign-in-and-sign-ip.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeUser = null;

  componentDidMount() {
    this.unsubscribeUser = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeUser();
  }

  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>

          <Route path={"/shop"}>
            <ShopPage />
          </Route>

          <Route path={"/signin"}>
            <SignInAndSignUp />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
