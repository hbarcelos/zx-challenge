import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProductSearchPage from '../pages/product-search';
import HomePage from '../pages/home';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/produtos" exact component={ProductSearchPage} />
    </Switch>
  </Router>
);
