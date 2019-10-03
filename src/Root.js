import React from 'react';
import { Provider } from 'react-redux';
//import { createStore, compose, applyMiddleware } from 'redux';

import store from './services/store';

// const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>
    {children}
  </Provider>
);

export default Root;
