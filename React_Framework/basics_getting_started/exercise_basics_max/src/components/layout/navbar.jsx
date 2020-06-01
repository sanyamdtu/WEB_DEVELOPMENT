import React from "react";

function navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://github.com/">
          <i className="fab fa-github"></i>
          Github
        </a>
      </nav>
    </div>
  );
}

export default navbar;
