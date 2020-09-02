import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault(); // stops the refresh

    //do the login logic...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault(); // stops the refresh

    //do the register logic...

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create user and logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/letter_e/letter_e_PNG86.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email "
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onClick={login}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>Quote</p>
        </form>
        <button onClick={register} className="login__registerButton">
          Create your shopping Account
        </button>
      </div>
    </div>
  );
}

export default Login;
