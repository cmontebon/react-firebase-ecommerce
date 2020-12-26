import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, cartItemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{cartItemCount}</span>
  </div>
)

const mapStateToProps = (state) => ({
  cartItemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(CartIcon);