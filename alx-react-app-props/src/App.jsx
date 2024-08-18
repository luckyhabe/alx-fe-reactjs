// In App.jsx file

import React from 'react';
import UserContext from './UserContext';
import ProfilePage from './ProfilePage';

const userData = {
  username: 'john_doe',
  email: 'john@example.com'
};

const App = () => {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
