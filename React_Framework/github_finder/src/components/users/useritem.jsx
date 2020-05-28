import React, { Component } from "react";
class userItem extends Component {
  render() {
    let user = this.props.info;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={user.avatar_url} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{user.login}</p>
          <a href={user.github_link} className="btn btn-primary">
            more info
          </a>
        </div>
      </div>
    );
  }
}

export default userItem;
