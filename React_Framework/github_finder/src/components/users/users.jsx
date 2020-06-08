import React, { useContext } from "react";
import Spinner from "../layout/spinner";
import Useritem from "./useritem";
import Githubcontext from "../../context/github/github_context";
function Users() {
  const github_Context = useContext(Githubcontext);
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log(github_Context);
  let value;
  if (github_Context.loading) {
    value = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    value = (
      <div className="row">
        {console.log("rishita")}
        {console.log(github_Context)}
        {github_Context.users &&
          github_Context.users.map((user) => <Useritem user={user} />)}
      </div>
    );
  }
  return value;
}

export default Users;
