import { ApolloError, IFieldResolver } from 'apollo-server-express';
import fetch from 'node-fetch';

import fromSuperHeroAPICharacterToHero from '../mappers/fromSuperHeroAPICharacterToHero';

import type { Hero } from './typeDefs';
import type SuperHeroAPICharacter from './SuperHeroAPICharacter';

const getBaseURL = () => `https://superheroapi.com/api/${process.env.TOKEN}`;

const hero: IFieldResolver<unknown, unknown, { id: string }> = (
  _,
  { id },
): Promise<Hero> =>
  fetch(getBaseURL() + '/' + id, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then(fromSuperHeroAPICharacterToHero);

const searchHeros: IFieldResolver<unknown, unknown, { name: string }> = (
  _,
  { name },
) =>
  fetch(getBaseURL() + '/search/' + name, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.response !== 'success')
        throw new ApolloError('Unknown error with SuperHeroAPI.');
      return data.results ?? [];
    })
    .then((heros: SuperHeroAPICharacter[]) => {
      return heros.map(fromSuperHeroAPICharacterToHero);
    });

const resolvers = {
  Query: {
    hero,
    searchHeros,
  },
};

export default resolvers;
