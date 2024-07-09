import React, { useState } from "react";
import "../styles/AdminLogin.css";

const AdminLogin = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      handleLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="inputContainer">
        <div className="inputBoxContainer">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputBox"
            placeholder="Enter your email here"
          />
        </div>
        <div className="inputBoxContainer">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputBox"
            placeholder="Enter your password here"
          />
        </div>
        {error && <p className="errorLabel">{error}</p>}
        <div className="buttonContainer">
          <button type="submit">Log in</button>
        </div>
      </form>
      <div className="vid">
        <video autoPlay muted loop>
          <source src="\img\LoginVideo_Medium.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default AdminLogin;
