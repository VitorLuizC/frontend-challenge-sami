import gql from 'graphql-tag';

/**
 * Variables of `GET_HERO_QUERY`.
 */
export type Variables = {
  id: string;
};

/**
 * Result of `GET_HERO_QUERY`.
 */
export type Result = {
  hero: {
    id: string;
    name: string;
    avatar: string;
    stats: {
      intelligence: number;
      strength: number;
      combat: number;
      durability: number;
      power: number;
      speed: number;
    };
    biography: {
      fullName: string;
    };
  };
};

/**
 * GraphQL Query that search heros by name and return them.
 */
const GET_HERO_QUERY = gql`
  query GET_HERO_QUERY($id: ID!) {
    hero(id: $id) {
      id
      name
      avatar
      stats {
        intelligence
        strength
        combat
        durability
        power
        speed
      }
      biography {
        fullName
      }
    }
  }
`;

export default GET_HERO_QUERY;
