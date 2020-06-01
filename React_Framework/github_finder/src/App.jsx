import React, { Fragment, Component } from "react";
import "./App.css";
import More_info from "./components/users/More_info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import About from "./components/pages/about";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/users";
import Form from "./components/users/form";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: "",
    user: {},
  };
  search = async (text) => {
    this.setState({ loading: true });
    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.R_github_c_id}&client_secret=${process.env.R_github_c_s}`
    );
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };
  search_user = async (text) => {
    this.setState({ loading: true });
    let res = await axios.get(
      `https://api.github.com/users/${text}?client_id=${process.env.R_github_c_id}&client_secret=${process.env.R_github_c_s}`
    );
    console.log(res.data);
    this.setState({ user: res.data, loading: false });
  };
  clear = () => {
    this.setState({ users: [], loading: false });
  };
  alert = (msg) => {
    this.setState({ alert: msg });
    setTimeout(() => {
      this.setState({ alert: "" });
    }, 2000);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <br></br>
          {this.state.alert.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {this.state.alert}
            </div>
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Form
                    search={this.search}
                    show_clear={true}
                    clear={this.clear}
                    alert={this.alert}
                  />
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                  ></Users>
                </Fragment>
              )}
            />
            >
          </Switch>
          <Route
            exact
            path="/about"
            render={(props) => (
              <Fragment>
                <About />
              </Fragment>
            )}
          ></Route>
        </div>
        <Route
          path="/user/:login"
          render={(props) => (
            <Fragment>
              <More_info
                user={this.state.user}
                search={this.search_user}
                Component={...props}
              ></More_info>
            </Fragment>
          )}
        />
      </Router>
    );
  }
}

export default App;
