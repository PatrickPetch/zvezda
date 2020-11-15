import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Intro from "./components/Intro/Intro.js";
import News from "./components/News/News.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Intro />
      {/*<News />
      <About /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit!!!! Jsx <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
