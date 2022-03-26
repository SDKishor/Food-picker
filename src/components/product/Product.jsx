import React from 'react';
import "./product.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function product(props) {
  const {name, price, image, addtobasket} = props

  
  
  return (
    <div className='product'>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>Price: <span>{price}</span></h3>
      <button onClick={()=> addtobasket(name)}>Add to Busket <ShoppingCartOutlinedIcon className='icon'/></button>
    </div>
  )
}

export default product