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

export function wait(sec: number) {
  const start = Date.now();
  let now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
