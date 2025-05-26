import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-modal-bg">
      <div className="login-modal">
        <h2 className="login-title">
          Seed Plan
          <span role="img" aria-label="seed" style={{ marginLeft: 6 }}>
            🌱
          </span>
        </h2>
        <form className="login-form">
          <div className="login-input-container">
            <input
              className="login-input"
              type="text"
              placeholder=" "
              autoComplete="username"
            />
            <input
              className="login-input"
              type="password"
              placeholder=" "
              autoComplete="current-password"
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
