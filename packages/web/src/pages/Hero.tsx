import { RouteComponentProps, Link } from 'react-router-dom';

import React from 'react';
import Modal from '../components/Modal';
import GET_HERO_QUERY, { Result, Variables } from '../graphql/GET_HERO_QUERY';
import { useQuery } from 'react-apollo';
import { HEROS } from '../routers/routes';
import ProgressBar from '../components/ProgressBar';

type Props = RouteComponentProps<{
  heroId: string;
}>;

export default function Hero({ match }: Props) {
  const { data, loading } = useQuery<Result, Variables>(GET_HERO_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: match.params.heroId,
    },
  });

  if (loading) return <ProgressBar />;

  return (
    <Modal open>
      <h1>{data?.hero.name}</h1>
      <h2>{data?.hero.biography.fullName}</h2>

      <figure>
        <img src={data?.hero.avatar} alt={data?.hero.name} />
      </figure>

      <table>
        <tbody>
          <tr>
            <th>intelligence</th>
            <td>{data?.hero.stats.intelligence}</td>
          </tr>
          <tr>
            <th>strength</th>
            <td>{data?.hero.stats.strength}</td>
          </tr>
          <tr>
            <th>combat</th>
            <td>{data?.hero.stats.combat}</td>
          </tr>
          <tr>
            <th>durability</th>
            <td>{data?.hero.stats.durability}</td>
          </tr>
          <tr>
            <th>power</th>
            <td>{data?.hero.stats.power}</td>
          </tr>
          <tr>
            <th>speed</th>
            <td>{data?.hero.stats.speed}</td>
          </tr>
        </tbody>
      </table>

      <Link to={HEROS}>Fechar</Link>
    </Modal>
  );
}
