import React from 'react';
import { API_ROLE, API_TOKEN } from './constants';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem(API_TOKEN);
  const isRole = localStorage.getItem(API_ROLE);

  return isAuthenticated && isRole ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
