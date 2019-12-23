import React from 'react';
import { Route, Switch } from "react-router";

import ProfilePage from './views/ProfilePage/ProfilePage';
import Home from './views/Home/Home';

export default function Routes() {
    return(
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/profile">
              <ProfilePage />
          </Route>          
        </Switch>
    )
}