import React from "react";
import "./App.css";
import About from "./components/pages/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Contacts from "./components/contacts/contact_display";
import Contact_state from "./Context/contacts/Contact_state";
import Form from "./components/layouts/conrtact_form";
import Auth_Context from "./Context/auth/auth_state";
import Login_Form from "./components/login/form";
import Register_form from "./components/register/register_form";
function App() {
  return (
    <Auth_Context>
      <Contact_state>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div className="row">
                    <Contacts />
                    <Form />
                  </div>
                )}
              ></Route>
              <Route exact path="/about" render={(props) => <About></About>} />
              <Route exact path="/login" render={(props) => <Login_Form />} />
              <Route
                exact
                path="/register"
                render={(props) => <Register_form />}
              />
            </Switch>
          </div>
        </Router>
      </Contact_state>
    </Auth_Context>
  );
}

export default App;
