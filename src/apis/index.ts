export * from './github.ts';

import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const client = axios.create({
  baseURL: 'https://api.github.com/repos',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: GITHUB_TOKEN,
  },
});
