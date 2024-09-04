import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Profile';
import Login from './Login';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <BrowserRouter>
      <Routes>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/profile/details" component={ProfileDetails} />
          <Route path="/profile/settings" component={ProfileSettings} />
        </Switch>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

const ProfileDetails = () => {
  return <div>Profile Details</div>;
};

const ProfileSettings = () => {
  return <div>Profile Settings</div>;
};

const BlogPost = ({ match }) => {
  const { postId } = match.params;

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      {/* Render blog post content based on postId */}
    </div>
  );
};

<BrowserRouter>
<Routes>
  <Switch>
    <Route path="/blog/:id" component={BlogPost} />
  </Switch>
</Routes>
</BrowserRouter>

export default App;
