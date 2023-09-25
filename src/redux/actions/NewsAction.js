// export const setNewsData = (data) => ({
//     type: 'SET_NEWS_DATA',
//     payload: data,
//   });

//   export const setLoading = (isLoading) => ({
//     type: 'SET_LOADING',
//     payload: isLoading,
//   });

export const fetchNewsRequest = () => ({
  type: 'FETCH_NEWS_REQUEST',
  payload: isLoading,
});

export const fetchNewsSuccess = newsData => ({
  type: 'FETCH_NEWS_SUCCESS',
  payload: newsData,
});

export const fetchNewsFailure = error => ({
  type: 'FETCH_NEWS_FAILURE',
  payload: error,
});

export const fetchNews = () => {
  return async dispatch => {
    dispatch(fetchNewsRequest());

    try {
      const response = await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_299706fc754d2787e5d5e28874e6f6f377ecd&q=news%20api',
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newsData = await response.json();
      dispatch(fetchNewsSuccess(newsData.articles));
    } catch (error) {
      dispatch(fetchNewsFailure(error.message));
    }
  };
};
