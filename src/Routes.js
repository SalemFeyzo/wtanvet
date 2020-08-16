import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/products/Products';
import { Home } from './components/layout/landingPage/Home';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Routes;
