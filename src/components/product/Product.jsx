import React from 'react';
import "./product.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function product() {
  return (
    <div className='product'>
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80" alt="" />
      </div>
      <h2>Burgar</h2>
      <h3>Price: <span>$5</span></h3>
      <button>Add to Busket <ShoppingCartOutlinedIcon className='icon'/></button>
    </div>
  )
}

export default product