import axios from 'axios';

const BACKEND_URL = 'https://api.github.com/repos/facebook/react/issues';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const getDetail = async (issue_number: string) => {
  try {
    return await axios.get(BACKEND_URL + `/${issue_number}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  } catch (err) {
    console.log(err);
  }
};
