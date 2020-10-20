import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './../pages/SignIn';

function AuthRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect from="/dashboard" to="/auth"/>
                <Route path="/auth" component={SignIn}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AuthRoutes;