import React from 'react';
import './App.css';

const fetchUser = (id) => {
  fetch('/api/users/1', {
    method: 'get',
    headers: {
      'Authorization': 'Token'
    }
  })
    .then(res => res.json())
    .then((response) => { console.log("Test datas response", response); })
    .catch((error) => { console.log("Error while fetching test datas", error); })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App">
        <button onClick={fetchUser}>
          Fetch Test Datas
        </button>
      </div>
    </div>
  );
}

export default App;
