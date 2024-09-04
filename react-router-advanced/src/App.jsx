import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Profile';
import Login from './Login';

const App = () => (
  <BrowserRouter>
  <Routes>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/profile" component={Profile} />
    </Switch>
  </Routes>
  </BrowserRouter>
);

export default App;
