import * as ActionTypes from '../actionTypes';

export const fetchProducts = () => ({
  type: ActionTypes.fetchProducts,
});

export const addToCart = product => ({
  type: ActionTypes.addToCart,
  payload: {...product, quantity: 1},
});

export const removeFromCart = product => ({
  type: ActionTypes.removeFromCart,
  payload: product,
});

export const clearCart = () => ({
  type: ActionTypes.clearCart,
});

// Product Quantity

export const increaseQuantityAction = product => ({
  type: ActionTypes.increaseQuantity,
  payload: product,
});

export const decreaseQuantityAction = product => ({
  type: ActionTypes.decreaseQuantity,
  payload: product,
});
