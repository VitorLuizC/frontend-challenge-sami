/**
 * A function that creates a link by replacing route parameters.
 * @param route - A raw route, same as received by `Route` component.
 * @param params - An object with route parameters to be applied.
 */
export default function createLink(
  route: string,
  params: Record<string, string> = {},
) {
  return Object.entries(params).reduce(
    (route, [key, value]) => route.replace(`:${key}`, value),
    route,
  );
}
