import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Invite } from '../pages/Invite';
import { Room } from '../pages/Room';

import { PokerProvider } from '../hooks/usePoker';
import { AuthForm } from '../pages/AuthForm';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastrar" exact component={AuthForm} />
        <Route path="/entrar" exact component={AuthForm} />

        <Route path="/" exact component={Home} />
        <Route path="/invite/:id" exact component={Invite} />
        <Route path="/invite" exact component={Invite} />
        <PokerProvider>
          <Route path="/room/:id" exact component={Room} />
        </PokerProvider>
      </Switch>
    </BrowserRouter>
  );
}