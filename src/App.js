import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./Components/Layout/AppNavbar";
import Dashboard from "./Components/Layout/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
