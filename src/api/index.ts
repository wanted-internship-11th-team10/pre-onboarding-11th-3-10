import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
