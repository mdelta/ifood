import React from 'react';
import { Route, Switch } from "react-router";

import ProfilePage from './views/ProfilePage/ProfilePage';
import Home from './views/Home/Home';
import RestaurantList from './views/Restaurants/RestaurantList';
import RestaurantMenuList from './views/Restaurants/RestaurantMenuList';

import { useIfoodRestaurants } from "./views/Restaurants/useRestaurantItems";

export default function Routes(props) {
    const { currentUser } = props;
    const restaurants = useIfoodRestaurants(currentUser.id);

    return(
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/menu">
              <RestaurantMenuList {...restaurants} />
          </Route>
          <Route exact path="/restaurants">
              <RestaurantList {...restaurants} />
          </Route>
          <Route exact path="/profile">
              <ProfilePage />
          </Route>          
        </Switch>
    )
}