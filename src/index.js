import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, combineReducers } from 'redux';
import login  from './store/reducers/login/login';
import init from './store/reducers/init';

// React-redux
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  login: login,
  init: init
})
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store } > <App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
