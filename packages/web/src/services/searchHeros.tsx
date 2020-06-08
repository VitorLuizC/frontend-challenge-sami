import type Hero from './Hero';

type SearchHero = {
  response: 'success';
  'results-for': 'batman';
  results: Hero[];
};

export default function searchHeros(name: string): Promise<SearchHero> {
  return window
    .fetch(`http://superheroapi.com/api/${process.env.TOKEN}/search/${name}`)
    .then((response) => response.json());
}
