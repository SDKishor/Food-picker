import './App.css';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main">
          <div className="products">
            <Product/>  
          </div>
          <Cart/>
        </div>
    </div>
  );
}

export default App;
