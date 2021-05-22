import React from 'react';
import logo from './logo.svg';
import './App.css';
import FBLogin from "./components/FacebookLogin/login";

function App() {
  const [potato, setPotato] = React.useState(false)
  const clickMe = () => {
    setPotato(!potato)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
        <input id="firstName"/>
        <input id="button" type="button" value="Click Me" onClick={clickMe} />
      {potato && <span id="someText">Hello World</span>}
    </div>
  );
}

export default App;
