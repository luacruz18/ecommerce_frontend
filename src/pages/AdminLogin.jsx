import React, { useState } from "react";
import "../styles/AdminLogin.css";

const Adminlogin = ({ handleLogin }) => {
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
          />
        </div>
        <div className="inputBoxContainer">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputBox"
          />
        </div>
        {error && <p className="errorLabel">{error}</p>}
        <div className="buttonContainer">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Adminlogin;
