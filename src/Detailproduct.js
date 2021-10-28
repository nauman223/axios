import React from 'react';
import { getAllProduct } from "./api/product";
import { useEffect, useState } from "react";

const App = () =>{
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    getAllProduct().then((res) => {
      console.log(`res`, res.data.data);
      setProduct(res.data.data);
    });
  };

function App() {
  return (
    <div>
     <h1>hello world</h1>
    </div>
  );
}
}

export default App;