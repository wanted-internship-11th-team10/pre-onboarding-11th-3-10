import axios from 'axios';

const BACKEND_URL = 'https://api.github.com/repos/facebook/react/issues';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const getDetail = async (issue_number: string) => {
  try {
    const res = await axios.get(BACKEND_URL + `/${issue_number}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return {
      title: res.data.title,
      created_at: res.data.created_at.substring(0, 10),
      user: { login: res.data.user.login, avatar_url: res.data.user.avatar_url },
      number: res.data.number,
      body: res.data.body,
      comments: res.data.comments,
    };
  } catch (err) {
    console.log(err);
  }
};
