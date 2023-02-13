import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form action="submit">
        <ul className="register-list">
          <li className="register-item">
            <h1 className="register-title">Create Account</h1>
          </li>
          <li className="register-item">
            <input className="register-inputs" type="text" placeholder="Name" />
          </li>
          <li className="register-item">
            <input
              className="register-inputs"
              type="text"
              placeholder="Email"
            />
          </li>
          <li className="register-item">
            <input
              className="register-inputs"
              type="password"
              placeholder="Password"
            />
          </li>
          <li className="register-item">
            <input
              className="register-inputs"
              type="password"
              placeholder="Confirm Password"
            />
          </li>
          {/* <li className="auth-item"> */}
          <button className="btn-register">Register</button>
          {/* </li> */}
        </ul>
      </form>
      <a onClick={() => navigate("/login")} className="have-account">
        Already have an account? Login here.
      </a>
    </div>
  );
};

export default Register;
