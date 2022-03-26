import React from 'react';
import "./product.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function product(props) {
  const {name, price, image} = props
  return (
    <div className='product'>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <h3>Price: <span>{price}</span></h3>
      <button>Add to Busket <ShoppingCartOutlinedIcon className='icon'/></button>
    </div>
  )
}

export default product