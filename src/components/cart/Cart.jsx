import React from 'react';
import "./cart.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SmallCard from '../smallCard/SmallCard';


function Cart() {
  return (
    <div className='cart'>
        <h3>Basket <ShoppingBasketIcon className='icon'/></h3>
        <div className="selected">
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
        </div>

        <button className='randomBtn'>Pick Random</button>
        <button className='clearBtn'>Select Again</button>
    </div>
  )
}

export default Cart