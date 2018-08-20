import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//components
import Rentals from "./components/Rentals/Rentals";
import Rental from "./components/Rentals/Rental";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/rentals" component={Rentals} />
          <Route exact path="/rentals/:id" component={Rental} />
        </div>
      </Router>
    );
  }
}

export default App;
