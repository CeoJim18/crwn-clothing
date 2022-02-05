import React from 'react';

import {connect} from 'react-redux';

import { clearItemFromCart,addItem,removeItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem=({cartItem,clearItem,addItem,removeItem})=>{
  const {imageUrl,name,quantity,price}=cartItem;

  return (//je wilt die hele item passen (zodat je kan removen en of deleten)
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
      <span className='value'>{quantity}</span>

      <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>${price}</span>
    <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>

  </div>
)

};

const mapDispatchToProps=(dispatch)=>({
clearItem:  item=> dispatch(clearItemFromCart(item)),
addItem: item=>dispatch(addItem(item)),
removeItem: item=> dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
//{cartItem: {name,imageUrl,price,quantity} ---> als je op zo een manier destructored heb je alleen access tot de child props (name,ImageUrl etc.) NIET tot cartItem zelf.
//arrows bij quanitities zn met unicode ufc 8 gezet.

//ONCLICK is een functie die een event neemt en daarmee wat returend.
