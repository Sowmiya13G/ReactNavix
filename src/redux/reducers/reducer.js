const initialProductState = {
  products: [],
};

export const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {...state, products: action.payload};
    default:
      return state;
  }
};

const initialCartState = {
  cart: [],
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, action.payload]};
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {...state, cart: []};
    default:
      return state;
  }
};
