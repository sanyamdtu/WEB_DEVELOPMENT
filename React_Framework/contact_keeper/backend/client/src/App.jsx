import React from "react";
import "./App.css";
import About from "./components/pages/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Contacts from "./components/contacts/contact_display";
import Contact_state from "./Context/contacts/Contact_state";
import Form from "./components/layouts/conrtact_form";
function App() {
  return (
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
          </Switch>
        </div>
      </Router>
    </Contact_state>
  );
}

export default App;
