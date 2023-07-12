import type { AxiosResponse } from 'axios';
import axios from 'axios';

import { env } from '@/constant';

const client = axios.create({
  baseURL: env.BASE_URL,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${env.ACCESS_TOKEN}`,
  },
});
const responseBody = (response: AxiosResponse) => response.data;

type getIssusesRequest = {
  user: string;
  repo: string;
};
export const getIssues = ({ user, repo }: getIssusesRequest) =>
  client.get(`/repos/${user}/${repo}/issues?state=open&sort=comments`).then(responseBody);
