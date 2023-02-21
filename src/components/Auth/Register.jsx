import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Loader from "../Loader/Loader";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { handleRegister, loading, error } = useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните все поля!");
    } else {
      let formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password2", passwordConfirm);
      handleRegister(formData, email);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSave}>
        <ul className="register-list">
          <li className="register-item">
            <h1 className="register-title">Create Account</h1>
            {error ? <h2>{error}</h2> : null}
          </li>

          <li className="register-item">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="register-inputs"
              type="text"
              placeholder="First Name"
            />
          </li>
          <li className="register-item">
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="register-inputs"
              type="text"
              placeholder="Last Name"
            />
          </li>
          <li className="register-item">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="register-inputs"
              type="text"
              placeholder="Email"
            />
          </li>
          <li className="register-item">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="register-inputs"
              type="password"
              placeholder="Password"
            />
          </li>
          <li className="register-item">
            <input
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
