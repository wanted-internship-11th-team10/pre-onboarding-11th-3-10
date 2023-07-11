import { Octokit } from '@octokit/core';

const OWNER = 'facebook';
const REPO = 'react';

const client = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const fetchIssueList = (owner = OWNER, repo = REPO) => {
  return client.request(`GET /repos/${owner}/${repo}/issues`, {
    per_page: 50,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
};
