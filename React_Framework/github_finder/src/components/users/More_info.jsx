import React, { useEffect } from "react";
import Repos from "../repos/repos";
var More_info = ({ search, search_repo, match, user, repos }) => {
  useEffect(() => {
    {
      search(match.params.login);
      search_repo(match.params.login);
    }
    //uselint-disable-next
  }, []);

  var user = user;
  return (
    <div>
      <div className="card">
        <img
          src={user.avatar_url}
          className="card-img-top img-thumbnail w-25 h-25"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
            <div className="location">
              <strong>location{user.location}</strong>
            </div>
            <div className="bio">
              <strong>bio:{user.bio}</strong>
            </div>
            <div className="hireable">
              <strong>hireable:{user.hireable}</strong>
            </div>
            <div>
              <button className="btn px-md-3 mr-3 btn-primary">
                public reps:{user.public_repos}
              </button>
              <button className="btn px-md-3 mr-3 btn-danger">
                public gists:{user.public_gists}
              </button>
              <button className="btn px-md-3 mr-3 btn-light">
                followers:{user.followers}
              </button>
              <button className="btn px-md-3 mr-3 btn-warning">
                following :{user.following}
              </button>
            </div>
          </p>
          <a href={user.html_url} className="btn btn-primary">
            github link
          </a>
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};
export default More_info;
