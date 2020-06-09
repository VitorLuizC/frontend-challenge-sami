import React, { useCallback } from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar';
import SearchForm from '../components/SearchForm';
import SEARCH_HEROS_QUERY, {
  Result,
  Variables,
} from '../graphql/SEARCH_HEROS_QUERY';
import useQueryParam from '../hooks/useQueryParam';
import { HERO } from '../routers/routes';
import createLink from '../utils/createLink';

/**
 * Component that renders Heros page.
 */
export default function Heros() {
  const [name, setName] = useQueryParam('q', '');

  const { data, loading } = useQuery<Result, Variables>(SEARCH_HEROS_QUERY, {
    fetchPolicy: 'cache-and-network',
    skip: !name.trim(),
    variables: {
      name: name,
    },
  });

  const heros = data?.searchHeros ?? [];

  const handleSearch = useCallback((name: string) => setName(name), []);

  return (
    <main>
      <SearchForm initialValue={name} onSearch={handleSearch} />

      {loading && <ProgressBar />}

      <ul>
        {heros.map((hero) => (
          <li key={hero.id}>
            <figure>
              <img
                src={hero.avatar}
                alt={hero.name}
                title={`Avatar of ${hero.name}`}
              />
            </figure>
            {
              <Link to={createLink(HERO, { heroId: hero.id })}>
                {hero.name}
              </Link>
            }
          </li>
        ))}
      </ul>
    </main>
  );
}
