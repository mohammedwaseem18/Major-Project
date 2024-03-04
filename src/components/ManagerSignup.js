import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom'

function ManagerSignup() {
  return (
    <div className="login">
      <form className="loginbox">
        <h1 className="login-title">Manager Signup</h1>

        <div className="login-inputcontainer">
          <div>
            <label htmlFor="name" className="inp-component">
              <input placeholder="Name *" className="login-input" type="text" />
            </label>
          </div>
          <div>
            <label className="inp-component" htmlFor="email">
              <input
                placeholder="Email Address *"
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="branch" className="inp-component">
              <input
                placeholder="Branch *"
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
          <div>
            <label htmlFor="conform-password" className="inp-component">
              <input
                placeholder="Conform Password *"
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Signup
        </button>
        <div className="login-footer-desc">
          <p>
            Already Have An Account? <Link to={"/login"}> Login</Link>
          </p>
        </div>
      </form>
      <div className="right-login">
    
      </div>
    </div>
  );
}

export default ManagerSignup;
