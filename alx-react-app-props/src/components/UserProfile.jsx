// In UserProfile.jsx file

import React from 'react';

const UserProfile = (props) => {
  return (
    <UserContext.Provider value={userData}
      <UserProfile />
    </UserContext.Provider>
    
    <div>
    
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>

      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
