import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import React from 'react';

const Search = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user.");
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
<input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="location"
    type="text"
    placeholder="Enter location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
/>
<input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="minRepositories"
    type="number"
    placeholder="Enter minimum repositories"
    value={minRepos}
    onChange={(e) => setMinRepos(e.target.value)}
/>

        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {userData && (
        <div>
          
          <img src={userData.avatar_url} alt={userData.login} />
          <p>Name: {userData.name}</p>
          <a href={userData.html_url}>GitHub Profile</a>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                    Location
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Enter location"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepositories">
                    Minimum Repositories
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="minRepositories"
                    type="number"
                    placeholder="Enter minimum repositories"
                />
            </div>
            
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Search
                </button>
            </div>
        </form>

        </div>
      )}
    </div>
  );
};

export default Search;
