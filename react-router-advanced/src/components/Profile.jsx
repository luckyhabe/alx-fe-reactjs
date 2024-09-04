import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
};

const Profile = ({ match }) => {
  return (
    <div>
      <h2>Profile</h2>
      <Route path={`${match.url}/details`} component={ProfileDetails} />
      <Route path={`${match.url}/settings`} component={ProfileSettings} />
    </div>
  );
};

const ProfileDetails = () => {
  return <h3>Profile Details</h3>;
};

const ProfileSettings = () => {
  return <h3>Profile Settings</h3>;
};

export default Profile;