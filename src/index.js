import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { noteReducer } from "./stores/Store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const persistConfig = {
    key: 'note',
    blackList: ['foundData', 'mode', 'message'],
    whitelist: ['data'],
    storage
}

let persistedReducer = persistReducer(persistConfig, noteReducer)
let store = createStore(persistedReducer);
export let persistedStore = persistStore(store);


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
