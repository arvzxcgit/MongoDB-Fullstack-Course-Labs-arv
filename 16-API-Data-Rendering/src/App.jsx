import { useState, useEffect } from 'react';
import DataList from './components/DataList';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching user data from a public API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>User Directory</h1>

      {/* Conditional Rendering logic */}
      {loading && <Loader />}
      
      {error && (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && <DataList items={data} />}
    </div>
  );
}

export default App;