import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import EntityExtractionExample from './screens/sample';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <EntityExtractionExample />
      </PersistGate>
    </Provider>
  );
};

// import React from "react";
// import MyForm from "./screens/MyForm";

// const App = () => {
//   return(<MyForm/>)
// }
export default App;