import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/users";
import Form from "./components/users/form";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  search = async (text) => {
    this.setState({ loading: true });
    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.R_github_c_id}&client_secret=${process.env.R_github_c_s}`
    );
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };
  clear = () => {
    this.setState({ users: [], loading: false });
  };
  alert = (msg) => {
    this.setState({ alert: msg });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <br></br>
        {this.state.alert && (
          <div className="alert alert-danger" role="alert">
            this.state.alert
          </div>
        )}
        <Form
          search={this.search}
          show_clear={true}
          clear={this.clear}
          alert={this.alert}
        />
        <Users users={this.state.users} loading={this.state.loading}></Users>
      </div>
    );
  }
}

export default App;
