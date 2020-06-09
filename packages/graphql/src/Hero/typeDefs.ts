import { gql } from 'apollo-server-express';

type HeroBiography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

type HeroWork = {
  occupation: string;
  base: string;
};

type HeroConnections = {
  groupAffiliation: string;
  relatives: string;
};

export type HeroAppearance = {
  gender: string;
  race: string;
  height: null | number;
  weight: number;
  eyeColor: string;
  hairColor: string;
};

export type HeroPowerStats = {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
};

export type Hero = {
  id: string;
  name: string;
  stats: HeroPowerStats;
  avatar: string;
  appearance: HeroAppearance;
  biography: HeroBiography;
  work: HeroWork;
  connections: HeroConnections;
};

const typeDefs = gql`
  type HeroWork {
    occupation: String!
    base: String!
  }

  type HeroConnections {
    groupAffiliation: String!
    relatives: String!
  }

  type HeroBiography {
    fullName: String!
    alterEgos: String!
    aliases: [String!]!
    placeOfBirth: String
    firstAppearance: String
    publisher: String
    alignment: String
  }

  type HeroAppearance {
    gender: String!
    race: String!
    height: Float
    weight: Float!
    eyeColor: String!
    hairColor: String!
  }

  type HeroPowerStats {
    combat: Float!
    durability: Float!
    intelligence: Float!
    power: Float!
    speed: Float!
    strength: Float!
  }

  type Hero {
    id: ID!
    name: String!
    stats: HeroPowerStats!
    avatar: String!
    appearance: HeroAppearance!
    biography: HeroBiography!
    work: HeroWork!
    connections: HeroConnections!
  }

  extend type Query {
    hero(id: ID!): Hero
    searchHeros(name: String!): [Hero!]!
  }
`;

export default typeDefs;
