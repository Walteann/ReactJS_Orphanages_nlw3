import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="auth"> */}
                    <Redirect from='/auth' to="/dashboard"/>   
                <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;