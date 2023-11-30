import * as ActionTypes from '../actionTypes';
export const fetchProducts = () => ({
  type: ActionTypes.fetchProducts,
});

export const addToCart = product => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = product => ({
  type: 'REMOVE_FROM_CART',
  payload: product,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
