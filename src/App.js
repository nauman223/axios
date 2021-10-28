import logo from "./logo.svg";
import "./App.css";
import { getAllProduct } from "./api/product";
import { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import {Link} from "react-router-dom"
import { elementRoles } from "aria-query";
const App = () => {
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

  return (
    <div className="App">
     
            {product.map(element => (
              <Card className="inner">
               
                <CardBody 
                  key ={element.id}
                >
                  <CardTitle tag="h5">{element.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {element.pantone_value}
                  </CardSubtitle>
                  <CardText>{element.color}</CardText>
                  
                  <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/det"
            >
             <Button>
               click me
             </Button>
            </Link>
                </CardBody>
              </Card>


            ))}
          </div>
  );
};

export default App;



/*

const name = usamaa


const myname =[...name]
console.log(m)



const myfuction =(...name) >{
  return "max"
}




*/




