import React from 'react'
import { Route, Switch } from 'react-router'
// import * as Sentry from '@sentry/browser';

import ProfilePage from './views/ProfilePage/ProfilePage'
import Home from './views/Home/Home'
import Order from './views/Order/Order'
import RestaurantList from './views/Restaurants/RestaurantList'
import RestaurantMenuList from './views/Restaurants/RestaurantMenuList'

import { useIfoodRestaurants } from './views/Restaurants/useRestaurantItems'
import { useIfoodOrders } from './views/Order/useOrderItems'

// Sentry.configureScope(function(scope) {
//     scope.setUser({"id": currentUser.id});
// });

export default function Routes (props) {
  const { currentUser } = props
  const restaurants = useIfoodRestaurants(currentUser.id)
  const orders = useIfoodOrders(currentUser.id)

  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/order'>
        <Order restaurantList={restaurants.restaurants} orderList={orders} />
      </Route>
      <Route exact path='/menu'>
        <RestaurantMenuList {...restaurants} />
      </Route>
      <Route exact path='/restaurants'>
        <RestaurantList {...restaurants} />
      </Route>
      <Route exact path='/profile'>
        <ProfilePage />
      </Route>
    </Switch>
  )
}
