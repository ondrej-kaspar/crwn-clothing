import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/contact" className="option">Contact</Link>
            {
                currentUser ?
                    <button type="button" className="option" onClick={() => auth.signOut()}>Sign out</button>
                    :
                    <Link to="/signin" className="option">Sign in</Link>

            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);