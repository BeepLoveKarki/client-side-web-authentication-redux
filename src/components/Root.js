import React from 'react';
import App from './App';
import Feature from './Feature';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import RequireAuth from './auth/require_auth';
import {Router,Route} from 'react-router';
import browserHistory from './history';

export class Root extends React.Component{
    render(){
       return( 
        <Router history={browserHistory}>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signout" component={Signout}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/feature" component={RequireAuth(Feature)}/>
            </div>
        </Router>
       )
    }
}

