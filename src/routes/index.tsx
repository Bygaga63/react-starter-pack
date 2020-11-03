import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from 'routes/private-route';
import { Routes } from 'routes/routes';
import { AuthPage } from 'pages/auth';
import { HomePage } from 'pages/home';

type Props = {};

export const RootRoute: FC<Props> = () => (
  <Router>
    <Switch>
      <Route path={Routes.auth}>
        <AuthPage />
      </Route>
      <PrivateRoute path={Routes.home}>
        <HomePage />
      </PrivateRoute>
    </Switch>
  </Router>
);
