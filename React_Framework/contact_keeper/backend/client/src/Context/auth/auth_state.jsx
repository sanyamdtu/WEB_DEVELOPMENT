import Auth_Context from "./auth_context";
import Auth_reducer from "./auth_reducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import React, { useReducer } from "react";
const Auth_state = (props) => {
  const initial_state = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(Auth_reducer, initial_state);

  return (
    <Auth_Context.Provider
      value={{
        token: state.token,
        user: state.user,
        error: state.error,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </Auth_Context.Provider>
  );
};
export default Auth_state;
