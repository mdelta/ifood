import React from 'react';
import { useStitchAuth } from "components/Auth/StitchAuth";
import { Route, Switch } from "react-router";
import Routes from 'Routes';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar'
import LoginPage from './views/LoginPage/LoginPage';
import Legal from './views/Legal/Legal';
import About from './views/About/About';
import Privacy from './views/Privacy/Privacy';

export default function App() {
    const {
        isLoggedIn,
        actions: { handleLogout },
    } = useStitchAuth();
    return (
        <div>
            <ButtonAppBar loginStatus={isLoggedIn} logout={handleLogout} />
            <Switch>
                <Route exact path="/legal">
                    <Legal />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/privacy">
                    <Privacy />
                </Route>
                <Route>
                    {isLoggedIn ? <Routes /> : <LoginPage />}
                </Route>
            </Switch>
        </div>
    );
}