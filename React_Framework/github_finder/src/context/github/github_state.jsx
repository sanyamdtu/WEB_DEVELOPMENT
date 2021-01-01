import React, { useReducer } from "react";
import Github_reducer from "./github_reducer";
import Github_context from "./github_context";
import axios from "axios";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERTRT,
} from "../types";
const Githubstate = (props) => {
  const initial_state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(Github_reducer, initial_state);

  //SEARCH USER
  const search_users = async (text) => {
    setloading();
    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.R_github_c_id}&client_secret=${process.env.R_github_c_s}`
    );
    console.log(res.data.items);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  //GETUSER
  var search_user = async (text) => {
    setloading();
    let res = await axios.get(
      `https://api.github.com/users/${text}?client_id=${process.env.R_github_c_id}&client_secret=${process.env.R_github_c_s}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    /* tslint:disable-next-line:variable-name */
  };
  //GET REPOS
  var search_repo = async (text) => {
    setloading();
    let res = await axios.get(
      `https://api.github.com/users/${text}/repos?client_id=${process.env.R_github_c_id}&client_secret=${process.env.R_github_c_s}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
    /* tslint:disable-next-line:variable-name */
  };
  //clear users
  var clear = () => dispatch({ type: CLEAR_USERS });
  //setlaoding
  const setloading = () => dispatch({ type: SET_LOADING });

  return (
    <Github_context.Provider
      value={{
        users: state.users,
        user: state.user,
        laoding: state.loading,
        repos: state.repos,
        search_users,
        clear,
        search_user,
        setloading,
        search_repo,
      }}
    >
      {props.children}
    </Github_context.Provider>
  );
};
export default Githubstate;
