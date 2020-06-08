import fetch from 'node-fetch';
import { IFieldResolver, ApolloError } from 'apollo-server-express';

const getBaseURL = () => `https://superheroapi.com/api/${process.env.TOKEN}`;

const hero: IFieldResolver<unknown, unknown, { id: string }> = (_, { id }) =>
  fetch(getBaseURL() + '/' + id, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result, getBaseURL());
      return result;
    });

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
        throw new ApolloError('Unknown error with superheroapi.');
      return data.results ?? [];
    });

const resolvers = {
  Query: {
    hero,
    searchHeros,
  },
};

export default resolvers;
