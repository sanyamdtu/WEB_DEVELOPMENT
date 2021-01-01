import React, { Fragment, useState } from "react";
import "./App.css";
import More_info from "./components/users/More_info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/about";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/users";
import Form from "./components/users/form";
import Githubstate from "./context/github/github_state";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Githubstate>
            <div>
              <Navbar />
              <br></br>
              {/* {Alert.length > 0 && (
                <div className="alert alert-danger" role="alert">
                  {Alert}
                </div>
              )} */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Form />
                    <Users />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/about"
                render={(props) => (
                  <Fragment>
                    <About />
                  </Fragment>
                )}
              ></Route>
              <Route
                path="/user/:login"
                render={(props) => (
                  <Fragment>
                    <More_info {...props}></More_info>
                  </Fragment>
                )}
              />
            </div>
          </Githubstate>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
