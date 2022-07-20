import { builds } from '../../../data/build';

/** @type {import('./__types/items').RequestHandler} */
export async function GET({ params }) {
  const { id } = params;
  const build = builds[id];

  return {
    body: build,
  };
}
