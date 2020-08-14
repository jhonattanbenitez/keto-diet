import React from "react";
import "./App.css";
import WeekContainer from "./components/WeekContainer/week-container.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import days from "./days.json";
import DietContainer from "./pages/diet-container";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      week: [],
    };
  }
  componentDidMount() {
    this.setState({ week: days });
  }
  render() {
    return (
      <div>
        <h1>KETO DIET</h1>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/diet">Diet</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/diet">
                <DietContainer />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <WeekContainer week={this.state.week} />
      </div>
    );
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
