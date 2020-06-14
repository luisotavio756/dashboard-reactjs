import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from '~/store';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './global.css';
import { isAuthenticated } from './services/auth.js';

const SignIn = lazy(() => import('./pages/SignIn'));

const Sis = lazy(() => import('./pages/Sis'));

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
);



export default function Routes(){

    return (
        <Router>
            <Suspense fallback={
                <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center'}}>
                    <div className="loader"></div>
                </div>
            }>
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <Provider store={store}>
                        <PrivateRoute path="/" component={Sis}/>
                    </Provider>
                </Switch>
            </Suspense>
        </Router>
    );
}


