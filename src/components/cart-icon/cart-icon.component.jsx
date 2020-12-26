import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, cartItemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{cartItemCount}</span>
  </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItemCount:  cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(CartIcon);