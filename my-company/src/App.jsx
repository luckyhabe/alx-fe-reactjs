// In App.jsx file

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    Children: [
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Services',
        element: <Services />
      },
      {
        path: 'Contact',
        element: <Contact />
      },

    ]
  },
]);

export default App;
