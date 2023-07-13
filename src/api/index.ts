import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
});

client.interceptors.request.use((config) => {
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  config.headers['Authorization'] = `Basic ${GITHUB_TOKEN}`;

  return config;
});
