import type Hero from './Hero';

export default async function getHero(heroId: string): Promise<Hero> {
  return window
    .fetch(`http://superheroapi.com/api/${process.env.TOKEN}/${heroId}`)
    .then((response) => response.json());
}
