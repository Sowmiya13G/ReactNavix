const initialState = {
  users: [],
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        users: [...state.users, action.payload],
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default userReducer;
