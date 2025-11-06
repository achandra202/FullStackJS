import { useState,useEffect } from 'react'


function App() {
    const [data, setData] = useState([]); // Initialize state to an empty array or null

  useEffect(() => {
    // Fetch data inside useEffect to run once after initial render
    fetch('/getusers')
      .then(response => response.json())
      .then(fetchedData => {
        setData(fetchedData); // Update state with the fetched data
      }     
    )
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this runs only once
  console.log(data)
  return (
    <div>
      <h1>Fetched Data:</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li >{item}</li> // Assuming 'id' and 'name' properties
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}


export default App
