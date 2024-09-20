process.env.REACT_APP_GITHUB_API_KEY

import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export { fetchUserData };
