import logo from "./logo.svg";
import "./App.css";

import { BeanCounter } from "./components/BeanCounter.js";

function App() {
  let bc = new BeanCounter(5, true);

  return (
    <div className="App">
      <header className="App-header">
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
          Learn React more awesome
        </a>
      </header>
    </div>
  );
}

export default App;
