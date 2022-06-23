import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(reducers, applyMiddleware(thunk));

export const store = configureStore({
  reducer: reducers
});

// :: React 18 way !!
const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

