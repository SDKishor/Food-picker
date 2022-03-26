import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {


  const[products, setProduct] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])

  return (
    <div className="App">
        <Header/>
        <div className="main">
          <div className="product_Container">
            <div className="products">
            {
              products.map(product => 
                <Product key={product.id}
                 name={product.name}
                 price ={product.price}
                 image = {product.image}
                /> 
              )
            }

          </div>
          </div>
          
          <Cart/>
        </div>
    </div>
  );
}

export default App;
