// In App.jsx file

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Navbar />
      <Switch>
        <Route path="/" exact element={Home} />
        <Route path="/about" element={About} />
        <Route path="/services" element={Services} />
        <Route path="/contact" element={Contact} />
      </Switch>
        </Routes>
    </Router>
  );
}

export default App;
