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
     <h1>hello</h1>
    </div>
  );
};

export default App;
