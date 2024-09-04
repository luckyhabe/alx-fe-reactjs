import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  // Implement your authentication check logic here
  // For example, check if the user is logged in
  return true; // Return true for demonstration
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute;