import axios from 'node_modules/axios/index';
const BACKEND_URL = 'https://api.github.com/repos/facebook/react/issues';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const getIssues = async () => {
  return await axios.get(BACKEND_URL, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
};
