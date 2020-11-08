import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let persistConfig = {
    key: 'root',
    storage
}

// ステートの値
let state_value = {
    counter: 0,
    message: "COUNTER"
};

// レデューサー
function counter(state = state_value, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1,
                message: "INCREMENT"
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1,
                message: "DECREMENT"
            };
        case 'RESET':
            return {
                counter: 0,
                message: 'RESET'
            }
        default:
            return state;
    }
}

let persistedReducer = persistReducer(persistConfig, counter);
let store = createStore(persistedReducer);
let persistedStore = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate
              loading={<p>loading...</p>}
              persistor={persistedStore}
          >
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
