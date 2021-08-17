import cartItems from './cart-items';

import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const remove = (state, action) => {
  return {
    ...state, 
    cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
  };
};

const decrease = (state, action) => {
  let tempCart;
    if (action.payload.amount === 1) {
      return remove(state, action);
    }
    else {
      tempCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount - 1};
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
};

const increase = (state, action) => {
  return {
    ...state,
    cart: state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = {...cartItem, amount: cartItem.amount + 1}
      }
      return cartItem;
    })
  }
};

const clearCart = (state, action) => {
  return {
    ...state, 
    cart: []
  };
};

const getTotals = (state, action) => {
  let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
    const { price, amount } = cartItem;
    const itemTotal = price * amount;
    cartTotal.total += itemTotal;
    cartTotal.amount += amount;
    return cartTotal; 
  }, { total: 0, amount: 0 });
  parseFloat(total.toFixed(2));
  return { ...state, total, amount };
};

const reducer = (state = initialStore, action) => {
  if (action.type === CLEAR_CART) {
    return clearCart(state, action);
  }
  else if (action.type === DECREASE) {
    return decrease(state, action);
  }
  else if (action.type === INCREASE) {
    return increase(state, action);
  }
  else if (action.type === REMOVE) {
   return remove(state, action);
  }
  else if (action.type === GET_TOTALS) {
    return getTotals(state, action);
  }
  return state;
};

export default reducer;
