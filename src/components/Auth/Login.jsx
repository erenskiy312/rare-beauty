import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form action="submit">
        <ul className="login-list">
          <li className="login-item">
            <h1 className="login-title">Sign in</h1>
          </li>
          <li className="login-item">
            <input className="login-inputs" type="text" placeholder="Email" />
          </li>
          <li className="login-item">
            <input
              className="login-inputs"
              type="password"
              placeholder="Password"
            />
          </li>
          {/* <li className="auth-item"> */}
          <button className="btn-login">Sign In</button>
          {/* </li> */}
        </ul>
      </form>
      <a className="forgot-password">Forgot password?</a>
      <div className="line"></div>
      <form action="">
        <h1 className="create-account-title">Create Account</h1>
        <button
          onClick={() => navigate("/register")}
          className="btn-click-register"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
