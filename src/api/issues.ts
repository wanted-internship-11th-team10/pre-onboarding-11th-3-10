import axios from 'axios';

import { IssuesDispatch } from '@/context/issuesContext';

const BACKEND_URL = 'https://api.github.com/repos/facebook/react/issues';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const getIssues = async (dispatch: IssuesDispatch, count: number) => {
  dispatch({ type: 'GET_ISSUES' });
  try {
    const response = await axios.get(BACKEND_URL + `?per_page=10&page=${count}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    const filter_data = response.data.filter((item: IssueDTO) => item.state == 'open');
    const sort_data = filter_data.sort((a: IssueType, b: IssueType) => {
      return b.comments - a.comments;
    });
    dispatch({
      type: 'GET_ISSUES_SUCCESS',
      data: sort_data.map((item: IssueDTO) => {
        return {
          title: item.title,
          number: item.number,
          comments: item.comments,
          user: item.user.login,
          created_at: item.created_at,
        };
      }),
    });
  } catch (err) {
    dispatch({ type: 'GET_ERROR' });
  }
};
