import { json } from '@sveltejs/kit';
import { builds } from '../../../../data/build';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  const { id } = params;
  const build = builds[id];

  return json(build);
}
