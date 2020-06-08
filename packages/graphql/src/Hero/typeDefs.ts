import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Hero {
    id: ID!
    name: String!
  }

  extend type Query {
    hero(id: ID!): Hero
    searchHeros(name: String!): [Hero!]!
  }
`;

export default typeDefs;
