import gql from 'graphql-tag';

/**
 * Variables of `SEARCH_HEROS_QUERY`.
 */
export type Variables = {
  name: string;
};

/**
 * Result of `SEARCH_HEROS_QUERY`.
 */
export type Result = {
  searchHeros: Array<{
    id: string;
    name: string;
    avatar: string;
  }>;
};

/**
 * GraphQL Query that search heros by name and return them.
 */
const SEARCH_HEROS_QUERY = gql`
  query SEARCH_HEROS_QUERY($name: String!) {
    searchHeros(name: $name) {
      id
      name
      avatar
    }
  }
`;

export default SEARCH_HEROS_QUERY;
