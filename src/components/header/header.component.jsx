import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header =({currentUser, hidden})=>(
  <div className='header'>
    <Link to='/' className='logo-container'>
    <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        Contact
      </Link>
      {
        currentUser?
        <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null :
      <CartDropdown/>
    }
    
  </div>
)

const mapStateToProps=createStructuredSelector({//advanced  destructioring (opzoeken)
currentUser: selectCurrentUser,
hidden:selectCartHidden
});
//createStructuredSelector van reselect zorgt ervoor dat de higher state automatisch wordt gepassed als props van de selectors. je hoeft het dus niet expliciet te doen. 

export default connect(mapStateToProps)(Header);//je passed infeite de root reducer value in en je zet het in header
