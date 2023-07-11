import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

const OWNER = 'facebook';
const REPO = 'react';

const client = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export type IssueListDataType = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'][0];

export const fetchIssueList = async (page = 1, owner = OWNER, repo = REPO): Promise<IssueListDataType[]> => {
  const result = await client.request(`GET /repos/${owner}/${repo}/issues`, {
    page: page,
    per_page: 50,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return result.data;
};
