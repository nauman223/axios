import logo from "./logo.svg";
import "./App.css";
import { getAllProduct } from "./api/product";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    getAllProduct().then((res) => {
      console.log(`res`, res.data.data);
    });
  }, []);

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
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
