import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/products/Products';
import { Home } from './components/layout/landingPage/Home';
import NotFound from './NotFound';
import About from './components/layout/About';
import { Agents } from './components/layout/agents/Agents';
import { Contact } from './components/layout/contact/Contact';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/agents" component={Agents} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Routes;
