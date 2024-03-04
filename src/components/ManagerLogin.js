import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function ManagerLogin() {
  return (
    <div className="login">
      <form className="loginbox">
        <h1 className="login-title">Manager Login</h1>

        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Email Address *"
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-footer-desc">
          <p>
            Don't Have An Account? <Link to={"/signup"}>Signup</Link>
          </p>
          <p><Link to={"/elogin"}>Employee Login</Link></p>
        </div>
      </form>
      <div className="right-login"></div>
    </div>
  );
}

export default ManagerLogin;
