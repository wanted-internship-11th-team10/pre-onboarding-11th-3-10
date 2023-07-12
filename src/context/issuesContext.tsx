/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, useContext, useReducer } from 'react';

type Action = { type: 'GET_ISSUES' } | { type: 'GET_ISSUES_SUCCESS'; data: IssueType[] } | { type: 'GET_ERROR' };

type State = {
  issues: {
    loading: boolean;
    data: IssueType[] | [];
    error: boolean;
  };
};

export type IssuesDispatch = Dispatch<Action>;

const INITIAL_STATE = {
  issues: {
    loading: false,
    data: [],
    error: false,
  },
};
const loadingState = (current: IssueType[]) => ({
  loading: true,
  data: current,
  error: false,
});

const success = (current: IssueType[], newData: IssueType[]) => ({
  loading: false,
  data: current?.concat(newData),
  error: false,
});
const error = (current: IssueType[]) => ({
  loading: false,
  data: current,
  error: true,
});

const issuesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState(state.issues.data),
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(state.issues.data, action.data),
      };
    case 'GET_ERROR':
      return {
        ...state,
        issues: error(state.issues.data),
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
