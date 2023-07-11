import axios from 'axios';

export interface IssueData {
  id: number;
  title: string;
  number: number;
  created_at: string;
  comments: number;
  user?: {
    login: string;
    avatar_url: string;
  };
}

const BASE_URL = 'https://api.github.com';
const OWNER = 'facebook';
const REPO = 'react';
export const PER_PAGE = 30;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

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
