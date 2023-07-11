import qs from 'qs';
import { components } from '@octokit/openapi-types';

import { client } from '@/apis';

// https://api.github.com/repos/facebook/react/issues?sort=comments&per_page=5&page=2
type Issue = components['schemas']['issue'];
export async function getIssues(sort?: string): Promise<Issue[]> {
  const query = qs.stringify({ sort: sort || 'comments', per_page: 5, page: 1 });
  // const query = qs.stringify({ sort: undefined, per_page: 5, page: 1 });
  const response = await client.get(`/facebook/react/issues?${query}`);
  return response.data;
}
