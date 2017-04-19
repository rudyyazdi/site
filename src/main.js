import React from 'react';
import { render, } from 'react-dom';
import { createStore, } from 'redux';
import { Provider, } from 'react-redux';

import appReducer from 'flipper-app/reducers';
import FlipperApp from 'flipper-app/FlipperApp';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <FlipperApp />
  </Provider>,
  document.getElementById('app')
);
