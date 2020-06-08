import client from '../client';
import SEARCH_HEROS_QUERY, {
  Result,
  Variables,
} from '../graphql/SEARCH_HEROS_QUERY';

/**
 * Search heros by name.
 * @param name - Name to be searched.
 */
export default function searchHeros(name: string) {
  return client
    .then((client) =>
      client.query<Result, Variables>({
        query: SEARCH_HEROS_QUERY,
        variables: {
          name,
        },
      }),
    )
    .then((result) => result.data.searchHeros);
}
