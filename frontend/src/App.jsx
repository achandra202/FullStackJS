import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getusers");
        setData(response.data); // Axios automatically parses JSON
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      
        {users.data.map((user, index) => {
          return (
            <div key={user._id}>
              <p>{user.username}: {user.email}</p>
            </div>
          );
        })}
      
    </div>
  );
}

export default App;
