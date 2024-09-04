import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Profile';
import Login from './Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </Router>
    </Routes>
  );
};

export default App;
