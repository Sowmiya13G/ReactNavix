import React from 'react';
import {Provider} from 'react-redux';
import store from './redux-saga/store/store';
import AppNavigator from './navigation/AppNavigator';
import InitialScreen from './screens/OnBoardingscreens/InitialScreen/InitialScreen';
const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <InitialScreen />
    </Provider>
  );
};
export default App;
