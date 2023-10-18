export const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});
export const getUser = user => ({
  type: 'GET_USER',
  payload: user,
});

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
});

export const addToCart = product => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = product => ({
  type: 'REMOVE_FROM_CART',
  payload: product,
});