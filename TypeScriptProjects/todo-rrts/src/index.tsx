import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

// :: React 18 way !!
const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

