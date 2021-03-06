import React, { useEffect } from "react";

import { connect } from 'react-redux';

import CartItem from "./CartItem";

import { createClearCartAction, createGetTotalsAction } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {

  useEffect(() => {
    dispatch(createGetTotalsAction());
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(createClearCartAction())}>clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = store => {
  const { cart, total } = store;
  return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);
