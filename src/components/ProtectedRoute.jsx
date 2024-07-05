import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.user);

  if (!auth.token) {
    return <Navigate to="/administrador" />;
  }

  return children;
};

export default ProtectedRoute;
