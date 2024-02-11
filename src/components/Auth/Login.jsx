import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Loader from "../Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, name, loading } = useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  }

  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <form className="login-form" action="submit" onSubmit={handleSave}>
        <ul className="login-list">
          <li className="login-item">
            <h1 className="login-title">Sign in</h1>
          </li>
          <li className="login-item">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="login-inputs"
              type="text"
              placeholder="Email"
            />
          </li>
          <li className="login-item">
            <input
              onChange={(e) => setPassword(e.target.value)}
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
      <form className="register-click-form" action="submit">
        <h1 className="create-account-title">New Account</h1>
        <button
          onClick={() => navigate("/register")}
          className="btn-click-register"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Login;
