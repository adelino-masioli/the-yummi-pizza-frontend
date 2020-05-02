import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}