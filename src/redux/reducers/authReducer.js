import * as ActionTypes from '../actionTypes';

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.signupSuccess:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case ActionTypes.signupFailure:
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    case ActionTypes.loginSuccess:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case ActionTypes.loginFailure:
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
