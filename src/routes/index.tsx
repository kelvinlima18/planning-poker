import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Invite } from '../pages/Invite';
import { Room2ARessureicao } from '../pages/Room2ARessureicao';

import { PokerProvider } from '../hooks/usePoker';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/*<Route path="/room/:id" exact component={Room} />*/}
        <Route path="/invite/:id" exact component={Invite} />
        <Route path="/invite" exact component={Invite} />
        <PokerProvider>
          <Route path="/room/:id" exact component={Room2ARessureicao} />
        </PokerProvider>
      </Switch>
    </BrowserRouter>
  );
}