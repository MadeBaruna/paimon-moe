import { domains } from '../../../data/domain.js';

export async function load({ params }) {
  const { id } = params;

  const domain = domains[id];

  return { id, domain };
}
