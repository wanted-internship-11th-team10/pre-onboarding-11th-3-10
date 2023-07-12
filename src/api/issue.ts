import { client } from '.';

export interface IssueData {
  id: number;
  title: string;
  number: number;
  created_at: string;
  comments: number;
  body: string;
  user?: {
    login: string;
    avatar_url: string;
  };
}

const OWNER = 'facebook';
const REPO = 'react';
export const PER_PAGE = 30;

export async function fetchGithubIssues(page = 1, owner = OWNER, repo = REPO) {
  const params = {
    state: 'open',
    sort: 'comments',
    page: page,
    per_page: PER_PAGE,
  };

  const result: IssueData[] = await client.get(`/repos/${owner}/${repo}/issues`, { params }).then((res) => res.data);
  return result;
}

export async function fetchIssue(number: string, owner = OWNER, repo = REPO) {
  const result: IssueData = await client.get(`/repos/${owner}/${repo}/issues/${number}`).then((res) => res.data);
  return result;
}
