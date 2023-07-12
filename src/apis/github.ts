import qs from 'qs';
import { components } from '@octokit/openapi-types';

import { client } from '@/apis';

export type Issue = components['schemas']['issue'];

/**
 * @link https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues
 */
export async function getIssues(pageIndex = 1, perPage = 5, sort = 'comments'): Promise<Issue[]> {
  const query = qs.stringify({ page: pageIndex, per_page: perPage, sort: sort });
  const response = await client.get(`/facebook/react/issues?${query}`);
  return response.data;
}

/**
 * @link https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#get-an-issue
 */
export async function getIssue(owner: string, repo: string, issueNumber: string): Promise<Issue> {
  const response = await client.get(`/${owner}/${repo}/issues/${issueNumber}`);
  return response.data;
}
