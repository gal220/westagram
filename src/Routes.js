import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from './Pages/Profile/profile'
import Home from './Pages/Home/home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile/:id" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
