import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { HERO } from '../routers/routes';
import createLink from '../utils/createLink';

type Props = RouteComponentProps<{}>;

export default function Heros(_props: Props) {
  return (
    <ul>
      <li>
        <Link to={createLink(HERO, { heroId: '1' })}>Batman</Link>
      </li>
    </ul>
  );
}
