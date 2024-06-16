import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"; // Import the CSS file for styles
import { auth } from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // Navigate to home page on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Please enter your login and password!</p>
        <form onSubmit={handleSubmit} className="login-form">
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
              placeholder="Password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="form-actions">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        <div className="social-login">
          <a href="#!" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
