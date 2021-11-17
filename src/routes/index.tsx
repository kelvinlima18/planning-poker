import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Invite } from '../pages/Invite';
import { Room } from '../pages/Room';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:id" exact component={Room} />
        <Route path="/invite/:id" exact component={Invite} />
      </Switch>
    </BrowserRouter>
  );
}