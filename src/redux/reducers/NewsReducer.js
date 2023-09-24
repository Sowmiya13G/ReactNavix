const initialState = {
  newsData: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS_DATA':
      return {
        ...state,
        newsData: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
        loading: action.payload,
      };
    default:
      return state;
  }
};
