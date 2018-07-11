import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Home from './components/home';
import Header from './components/header';
import Bookmarks from './components/bookmarks';
import Search from './components/search-results';

export default (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/bookmarks' component={Bookmarks} />
      <Route exact path='/search' component={Search} />
      <Redirect to='/' />
    </Switch>
  </div>
);
