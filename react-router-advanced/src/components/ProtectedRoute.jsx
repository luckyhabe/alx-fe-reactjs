import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
  
    if (!isAuthenticated) {
      Navigate("/login");
      return null;
    }
  
    return children;
  };

export default ProtectedRoute;
