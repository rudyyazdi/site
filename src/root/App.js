import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Flipper from 'flipper/Flipper';
import reducer from 'root/reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => (
  <Provider store={store}>
    <Flipper />
  </Provider>
);
