import React from "react";
function userItem(props) {
  let user = props.info;
  return (
    <div className="card col-lg-3" style={{ width: "18rem" }}>
      <img src={user.avatar_url} className="card-img-top" alt=".."></img>
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <a href={user.html_url} className="btn btn-primary">
          more info
        </a>
      </div>
    </div>
  );
}

export default userItem;
