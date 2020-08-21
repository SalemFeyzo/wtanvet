import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/products/Products';
import { Home } from './components/layout/landingPage/Home';
import NotFound from './NotFound';
import { Agents } from './components/layout/agents/Agents';
import { Contact } from './components/layout/contact/Contact';
import Product from './components/products/Product';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agents" component={Agents} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/product/:name/:id" component={Product} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Routes;
