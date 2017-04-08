import React from 'react';
import { render, } from 'react-dom';
import { createStore, } from 'redux';
import { Provider, } from 'react-redux';

import appReducer from './src/reducers';
import App from './src/App';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
