import { Endpoints } from '@octokit/types';

import { client } from './';

export type IssueData = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'][0];

const OWNER = 'facebook';
const REPO = 'react';
export const PER_PAGE = 30;

export async function fetchGithubIssues(page = 1, owner = OWNER, repo = REPO): Promise<IssueData[]> {
  const params = {
    state: 'open',
    sort: 'comments',
    page: page,
    per_page: PER_PAGE,
  };

  const response = await client.get(`/repos/${owner}/${repo}/issues`, { params });
  return response.data;
}

export async function fetchIssue(number: string, owner = OWNER, repo = REPO): Promise<IssueData> {
  const response = await client.get(`/repos/${owner}/${repo}/issues/${number}`);
  return response.data;
}
