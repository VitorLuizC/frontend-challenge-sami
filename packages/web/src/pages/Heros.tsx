import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import type Hero from '../services/Hero';

import ProgressBar from '../components/ProgressBar';
import { HERO } from '../routers/routes';
import searchHeros from '../services/searchHeros';
import createLink from '../utils/createLink';

type Props = RouteComponentProps<{}>;

export default function Heros(_props: Props) {
  const [term, setTerm] = useState('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [heros, setHeros] = useState<Hero[]>([]);

  useEffect(() => {
    if (term) {
      setLoading(true);
      searchHeros(term)
        .then((results) => {
          setHeros(results.results);
        })
        .finally(() => setLoading(false));
    }
  }, [term]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTerm(value);
    },
    [value],
  );

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="search" value={value} onChange={handleChange} />
        <button type="submit">Pesquisar</button>
      </form>

      {loading && <ProgressBar />}

      <ul>
        {heros.map((hero) => (
          <li key={hero.id}>
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
