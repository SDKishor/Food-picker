import React, { useState } from 'react';
import "./cart.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SmallCard from '../smallCard/SmallCard';


function Cart(props) {
  const {baskets, clearbasket, pickRandom,result} = props 

  return (
    <div className='cart'>
        <h3>Basket <ShoppingBasketIcon className='icon'/></h3>
        <div className="selected">
          {
            baskets.map((basket,index)=>
              <SmallCard key={index} basket={basket} />
            )
          }
          
        </div>

        <button onClick={pickRandom} className='randomBtn'>Pick Random</button>
        <button onClick={clearbasket}  className='clearBtn'>Select Again</button>

        <h4>
          Result:
          <span>
            {result}
          </span>
        </h4>
    </div>
  )
}

export default Cart