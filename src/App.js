import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {

  const[products, setProduct] = useState([])
  const[basket, setBasket] = useState([])
  const[result, setResult] = useState("")

  
  
  const addtobasket = (name) =>{
    
    if(!basket.includes(name) && basket.length < 4){
      setBasket([...basket,name])
    }
    else{
      console.log("can not select more then 4 items");
    }
  }

  const clearbasket =()=>{
    setBasket([]);
    setResult("");
  }

  const pickRandom=()=>{
    
    if(basket.length > 1){
      const getrandom =  Math.floor(Math.random()* (basket.length)) ;
      setResult(basket[getrandom]);
    }else{
      console.log("select at least 2");
    }

    
  }
  
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
                 addtobasket={addtobasket}
                /> 
              )
            }

          </div>
          </div>
          <Cart baskets={basket} clearbasket={clearbasket} pickRandom={pickRandom} result={result}/>
        </div>
    </div>
  );
}

export default App;
