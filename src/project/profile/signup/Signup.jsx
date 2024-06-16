import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css"; // Import the CSS file for styles
import { auth } from "../config/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home"); // Redirect to home page on successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-subtitle">
            Please enter your details to create an account!
          </p>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="form-actions">
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </div>
          </form>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="skip">
        <Link to={"/home"}>
     
          <button className="skip-btn">skip</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Signup;
