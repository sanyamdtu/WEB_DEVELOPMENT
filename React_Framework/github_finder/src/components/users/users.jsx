import React, { Component } from "react";
import Useritem from "./useritem";
class users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "sanyamdtu",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/56213428?s=460&v=4",
        github_link: "https://github.com/sanyamdtu/",
      },
      {
        id: "2",
        login: "sanyamdtu",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/56213428?s=460&v=4",
        github_link: "https://github.com/sanyamdtu/",
      },
      {
        id: "3",
        login: "sanyamdtu",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/56213428?s=460&v=4",
        github_link: "https://github.com/sanyamdtu/",
      },
    ],
  };
  render() {
    return (
      <div>
        {/* to render we needed to return it */}
        {this.state.users.map((user) => (
          <Useritem info={user} />
        ))}
      </div>
    );
  }
}

export default users;
