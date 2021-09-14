import React from 'react';
import { auth } from '../../firebase/firebase.utils'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import './header.styles.scss';



const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
    <span className='logo'>Import Exotic</span>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop/sofas'>
        Sofas
      </Link>
      <Link className='option' to='/shop/tables'>
        Tables
      </Link>
      <Link className='option' to='/shop/chairs'>
        Chairs
      </Link>
      <Link className='option' to='/shop/outdoor'>
        Outdoor
      </Link>
      <Link className='option' to='/shop/indoor'>
        Indoor
      </Link>
    
      {currentUser ? (
        <div className='user' onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
          <Link className='option' to='/signin'>SIGN IN</Link>
        )}
      <CartIcon />
    </div>
    {
      hidden ? null :
        <CartDropDown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
