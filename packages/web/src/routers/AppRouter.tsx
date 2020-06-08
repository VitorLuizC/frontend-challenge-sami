import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withProgressBar from '../hocs/withProgressBar';
import { HERO, HEROS } from './routes';

const Heros = withProgressBar(() => import('../pages/Heros'));
const Hero = withProgressBar(() => import('../pages/Hero'));

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path={[HEROS, HERO]} component={Heros} />
      </Switch>
      <Switch>
        <Route exact path={HERO} component={Hero} />
      </Switch>
    </>
  );
}
