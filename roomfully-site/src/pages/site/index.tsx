import { Switch, Route } from 'react-router-dom';
import * as React from 'react';
import NotFoundPage from '../ui-kit/not-found-page';
import HomePage from './home-page';

const Site = () => {
  return (
    <Switch>
      <Route exact strict path='/' component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Site;
