import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userReducer"; // Importa la acción addUser de userReducer
import { useSelector } from "react-redux";
const BASE_URL = "http://localhost:3000";

const LoginForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error en inicio de sesión");
      }
      const { token } = await response.json(); 
      dispatch(addUser({ token })); 
    } catch (error) {
      console.error("Error en inicio de sesión:", error);

    }
  };

  return (
    <>
      {auth.token === null ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};

export default LoginForm;
