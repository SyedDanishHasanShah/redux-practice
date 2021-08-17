export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';

export const createDecreaseAction = (id, amount) => {
  return {
    type: DECREASE,
    payload: {
      id,
      amount
    }
  }
};

export const createIncreaseAction = id => {
  return {
    type: INCREASE,
    payload: {
      id
    }
  }
};

export const createClearCartAction = id => {
  return {
    type: CLEAR_CART,
  }
};

export const createGetTotalsAction = () => {
  return {
    type: GET_TOTALS
  }
};

export const createRemoveAction = id => {
  return {
    type: REMOVE,
    payload: {
      id
    }
  }
};