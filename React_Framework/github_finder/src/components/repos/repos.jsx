import React from "react";
import Repo_single from "./repo_single";
var repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <Repo_single repo={repo} />
      ))}
    </div>
  );
};
export default repos;
