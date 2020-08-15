import React from "react";
import "./App.css";
import HomePage from "./pages/home-page/home.page";
import { Route, Switch } from "react-router-dom";

const Diet = () => (
  <div>
    <h1>Diet</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/diet" component={Diet} />
        </Switch>
      </div>
    );
  }
}

export default App;
