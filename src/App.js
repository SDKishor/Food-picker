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
        <div className="faq_section">
          <div className="question">
            <h3>How useState Works?</h3>
            <p>useState is the first basic react hook. it lets you to add state to a functional component. it is a new way to add state without having to use class base component and should be used inside functional components. it return an array with two items first is the current value and second one let us update the value.</p>
          </div>
          <div className="question">
            <h3>Difference between props vs state ?</h3>
            <div className="verses">
              <span>
                Props: <br />
                Props are read-only <br />
                Props are immutable <br />
                props can not be modified
              </span>
              <span>
                State: <br />
                State influance output  <br />
                State can be modified with setState()  <br />
                State can only be passed as props <br />
                State is localy scoped<br />
              
              </span>
            </div>
            
          </div>
          
        </div>
    </div>
  );
}

export default App;
