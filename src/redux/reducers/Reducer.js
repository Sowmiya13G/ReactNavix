const initialState = {
  value: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        value: [action.payload],
      };
    default:
      return state;
  }
};
