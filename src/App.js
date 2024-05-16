import logo from './logo.svg';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log('🚀 ~ App ~ apiUrl:', apiUrl)
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log('🚀 ~ App ~ apiKey:', apiKey)
  return (
    <div className="App">
      <header className="App-header">
        <h2>{process.env.TITLE_NAME}</h2>
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
