import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Pedentes from '../pages/dashboard/Pedentes';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect from='/auth' to="/dashboard"/>   
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/pedentes" component={Pedentes}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;