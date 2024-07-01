import React, { useState } from "react";
import Button from "../../common/Button";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "usuario" && password === "contraseña") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setIsLoggedIn(false);
      setLoginError(
        "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <div className="LoginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
      {loginError && <p className="login-error">{loginError}</p>}
      {isLoggedIn && <p>¡Has iniciado sesión con éxito!</p>}
    </div>
  );
}

export default LoginPage;
