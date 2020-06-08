import React from "react";

function repo_single({ repo }) {
  return (
    <div>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
}

export default repo_single;
