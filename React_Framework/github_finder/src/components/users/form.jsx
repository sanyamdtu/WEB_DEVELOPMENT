import React, { useState, useContext } from "react";
import Github_context from "../../context/github/github_context";
var Form = ({ alert }) => {
  const github_context = useContext(Github_context);
  const [text, settext] = useState("");
  var onChange = (e) => {
    settext(e.target.value);
  };
  var onSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert("please enter something");
    } else {
      console.log(github_context.search_users);
      github_context.search_users(text);
      settext("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="d-inline">
        <input
          className="form-control"
          type="text"
          value={text}
          placeholder="search term"
          onChange={onChange}
        ></input>
        <button type="submit" className="btn btn-primary mx-auto">
          Submit
        </button>
      </form>
      {!github_context.users && (
        <input
          type="button"
          value="clear"
          className="btn btn-group-lg btn-danger mx-auto"
          onClick={github_context.clear}
        ></input>
      )}
    </div>
  );
};

export default Form;
