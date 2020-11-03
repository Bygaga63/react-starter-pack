import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from 'routes/routes';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from 'store/modules/user/selectors';
import { FC } from 'react';

type TProps = {
  path: Routes;
};

export const PrivateRoute: FC<TProps> = ({ children, ...rest }) => {
  const user = useSelector(getUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Routes.auth,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
