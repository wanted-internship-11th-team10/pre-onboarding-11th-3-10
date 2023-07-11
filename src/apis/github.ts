import qs from 'qs';
import { components } from '@octokit/openapi-types';

import { client } from '@/apis';

export type Issue = components['schemas']['issue'];

/**
 * @link https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues
 * @param sort
 */
export async function getIssues(sort = 'comments'): Promise<Issue[]> {
  const query = qs.stringify({ sort: sort, per_page: 5, page: 1 });
  const response = await client.get(`/facebook/react/issues?${query}`);
  return response.data;
}
