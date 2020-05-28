import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/users";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br></br>
        <Users></Users>
      </div>
    );
  }
}

export default App;
