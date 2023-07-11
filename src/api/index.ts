import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

const OWNER = 'facebook';
const REPO = 'react';

const client = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export type IssueData = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'][0];

export const fetchGithubIssues = async (page = 1, owner = OWNER, repo = REPO): Promise<IssueData[]> => {
  const result = await client.request(`GET /repos/${owner}/${repo}/issues`, {
    state: 'open',
    sort: 'comments',
    page: page,
    per_page: 50,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return result.data;
};
