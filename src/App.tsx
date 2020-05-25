import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Links } from "./links/links";

function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
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
      </header> */}
      <Links></Links>
      <iframe
        title="fanyi"
        src="https://fanyi.baidu.com/#en/zh/"
      ></iframe>
    </div>
  );
}

export default App;
