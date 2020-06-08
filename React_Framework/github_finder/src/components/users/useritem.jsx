import React from "react";
import { Link } from "react-router-dom";
function userItem({ user }) {
  return (
    <div className="card col-lg-3" style={{ width: "18rem" }}>
      {console.log(user)}
      <img src={user.avatar_url} className="card-img-top" alt=".."></img>
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <Link to={`user/${user.login}`} className="btn btn-primary">
          more info
        </Link>
      </div>
    </div>
  );
}

export default userItem;
