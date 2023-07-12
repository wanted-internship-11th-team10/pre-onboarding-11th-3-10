import type { AxiosResponse } from 'axios';
import axios from 'axios';

import { env } from '@/shared/constant';

const client = axios.create({
  baseURL: env.BASE_URL,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${env.ACCESS_TOKEN}`,
  },
});
const responseBody = (response: AxiosResponse) => response.data;

type getIssuesRequest = {
  org: string;
  repo: string;
  page: number;
  perPage?: number;
};

export const getIssues = ({ org, repo, page, perPage = 10 }: getIssuesRequest) =>
  client
    .get(`/repos/${org}/${repo}/issues?state=open&sort=comments&per_page=${perPage}&page=${page}`)
    .then(responseBody);
