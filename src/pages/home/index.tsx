import React, { FC } from 'react';
import { Toolbar } from './components/toolbar';

type Props = {};

export const HomePage: FC<Props> = (props) => {
  return (
    <div>
      Homepage
      <Toolbar />
    </div>
  );
};
