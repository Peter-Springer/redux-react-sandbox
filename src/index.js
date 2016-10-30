import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reduxFun from './reducers/rootReducer';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f);

  let store = createStore(reduxFun, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
