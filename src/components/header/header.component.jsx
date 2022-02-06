import React from 'react';

import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles';
const Header =({currentUser, hidden})=>(
  <HeaderContainer>
    <LogoContainer to='/'>
    <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        Contact
      </OptionLink>
      {
        currentUser?
        <OptionLink as='div' onClick={()=> auth.signOut()}> SIGN OUT</OptionLink>//met die as kan je een component voorbrengen als een andere (met nog dezelfde props als normale, maar andere soort component (in dit geval div))
        :
        <OptionLink  to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null :
      <CartDropdown/>
    }
    
  </HeaderContainer>
)

const mapStateToProps=createStructuredSelector({//advanced  destructioring (opzoeken)
currentUser: selectCurrentUser,
hidden:selectCartHidden
});
//createStructuredSelector van reselect zorgt ervoor dat de higher state automatisch wordt gepassed als props van de selectors. je hoeft het dus niet expliciet te doen. 

export default connect(mapStateToProps)(Header);//je passed infeite de root reducer value in en je zet het in header
