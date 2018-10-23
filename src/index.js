import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import './styles/bootstrap/dist/css/bootstrap.min.css';
import {Root} from './components/Root';
import rootReducer from './reducers/index'
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/types';


const createstorewithmiddleware=applyMiddleware(reduxThunk)(createStore);
const store=createstorewithmiddleware(rootReducer);

if(localStorage.getItem('token')){
    store.dispatch({type:AUTH_USER});
}

render(<Provider store={store}>
        <Root/>
        </Provider>,document.querySelector("#main"));