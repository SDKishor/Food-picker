import React from 'react';
import "./smallCard.css";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DeleteIcon from '@mui/icons-material/Delete';

function SmallCard() {
  return (
    <div className='small_card'>
        <LocalDiningIcon className='diningIcon'/>
          Burger 
        <DeleteIcon className='deleteIcon'/>
    </div>
  )
}

export default SmallCard