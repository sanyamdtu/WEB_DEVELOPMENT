import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class More_info extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    console.log(params);
    console.log("sanyam");
    //this.props.match.params.login
    this.props.search("sanyam");
  }

  render() {
    var user = this.props.user;
    return (
      <div>
        <div className="card">
          <img src={user.avatar_url} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
