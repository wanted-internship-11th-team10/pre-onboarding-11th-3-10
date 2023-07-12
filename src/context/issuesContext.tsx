/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import { createContext, Dispatch, useContext, useReducer } from 'react';

const BACKEND_URL = 'https://api.github.com/repos/facebook/react/issues';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type Action = { type: 'GET_ISSUES' } | { type: 'GET_ISSUES_SUCCESS'; data: IssueType[] };
type State = {
  issues: {
    loading: boolean;
    data: IssueType[] | null;
  };
};

type IssuesDispatch = Dispatch<Action>;

export const getIssues = async (dispatch: IssuesDispatch) => {
  dispatch({ type: 'GET_ISSUES' });
  try {
    const response = await axios.get(BACKEND_URL, {
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
    console.log(err);
  }
};

const INITIAL_STATE = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
};
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data: IssueType[]) => ({
  loading: false,
  data,
  error: null,
});

const issuesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState,
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data),
      };
    default:
      throw new Error(`Unhanded action type: ${action}`);
  }
};

const IssuesStateContext = createContext<State | null>(null);
const IssuesDispatchContext = createContext<IssuesDispatch | null>(null);

export const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(issuesReducer, INITIAL_STATE);

  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
};

export const useIssuesState = () => {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find issuesProvider');
  }
  return state;
};

export const useIssuesDispatch = () => {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find issuesProvider');
  }
  return dispatch;
};
