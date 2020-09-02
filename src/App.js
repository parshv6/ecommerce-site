import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //piece of code which  runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user in logged out...

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operation go in here...
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* We need react router */
} // To use render pages
{
  /* localhost.com */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}
