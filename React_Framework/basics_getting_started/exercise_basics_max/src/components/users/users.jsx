import React from "react";
import Spinner from "../layout/spinner";
import Useritem from "./useritem";
function users(props) {
  let value;
  if (props.loading) {
    value = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    value = (
      <div className="row">
        {/* to render we needed to return it */}
        {props.users.map((user) => (
          <Useritem info={user} />
        ))}
      </div>
    );
  }
  return value;
}

export default users;
