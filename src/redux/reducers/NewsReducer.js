const initialState = {
  loading: false,
  news: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        loading: false,
        news: action.payload,
        error: '',
      };
    case 'FETCH_NEWS_FAILURE':
      return {
        ...state,
        loading: false,
        news: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
