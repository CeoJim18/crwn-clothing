import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon=({toggleCartHidden})=>(//destructoring from props
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon class='shopping-icon'/>
    <span class='item-count'>0</span>
  </div>
)

const mapDispatchToProps= dispatch=>({
  toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);
