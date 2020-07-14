import React from 'react';
import ReactDOM from 'react-dom';
//import reduxThunk from 'redux-thunk';
//import { Provider } from 'react-redux'; // a component within the react-redux library
//import { createStore, applyMiddleware, compose } from 'redux';
//import reducers from './reducers';   //a component we created
import App from './components/App';  //a component we created

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(/*<Provider store={store}>*/<App />/*</Provider>*/, document.querySelector('#root'));