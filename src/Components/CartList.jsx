import React from 'react';
import "../Components/CartList.css";
import varify from "../Images/verify.png"

const CartList = ({product,onRemove,onQuantityChange }) => {

    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        onQuantityChange(product.prodId, newQuantity);
      };
    
        
  return (
    <div className='cart'>
        <div className='img-fluid cartimage'>
            <img src={product.imageurl} alt="image not load" />
        </div>
        <div>
            <h6>
        {product.prodName}
            </h6>
            <div style={{ display:"flex",gap:"1rem"}}>
                <span> Size : {product.prodSize}</span>
        <span> Color : {product.prodColor}</span>
            </div>
            <div className='mt-2' style={{display:"flex",gap:"1.7rem"}}>
                <span style={{ fontWeight:"500"}}>
                ${product.prodPrize}
                </span>
                <select name="quantity" value={product.quantity} onChange={handleQuantityChange}>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
          </select>
            </div>
            <div>
            <img src={varify} alt="" style={{height:"18px",width:"18px"}} />
            <small style={{color:"red"}}> You have saved ${product.saved}</small>
            </div>
            <div>
                <span style={{fontSize:"0.8rem",color:"blue",cursor:"pointer"}}  onClick={() => onRemove(product.prodId)}>Remove</span>
            </div>
        
        </div>
        <div>

        </div>
    </div>
  )
}

export default CartList
