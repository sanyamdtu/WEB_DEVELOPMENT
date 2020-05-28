import React, { Component } from "react";

class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            <i class="fab fa-github"></i>
            Github
          </a>
        </nav>
      </div>
    );
  }
}

export default navbar;
