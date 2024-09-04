import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Profile';
import Login from './Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;