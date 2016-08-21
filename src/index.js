import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Main';
import {Router,Route,hashHistory} from 'react-router';
import AppleBasket from './components/AppleBasket';
import {Provider} from 'react-redux';
import rootReducer from './reducers/appleBasketReducer';
import redux,{createStore} from 'redux';

let store=createStore(rootReducer);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
  {/*<Router history={hashHistory}>*/}
    {/*<Route path="/" component={AppleBasket}/>*/}
  {/*</Router>*/}
  <AppleBasket/>
    </Provider>, document.getElementById('app'));
