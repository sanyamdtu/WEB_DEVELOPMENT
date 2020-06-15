import React, { useContext } from "react";
import Spinner from "../layout/spinner";
import Useritem from "./useritem";
import Githubcontext from "../../context/github/github_context";
function Users() {
  const github_Context = useContext(Githubcontext);
  var { users, loading } = github_Context;
  let value;
  if (loading) {
    value = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    value = (
      <div className="row">
        {users && users.map((user) => <Useritem user={user} />)}
      </div>
    );
  }
  return value;
}

export default Users;
