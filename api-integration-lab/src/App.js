import React, { useState, useEffect } from 'react';
import User from './User';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (loading) {
    return <div className="status">Loading users...</div>;
  }

  if (error) {
    return <div className="status error">Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="user-grid">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;