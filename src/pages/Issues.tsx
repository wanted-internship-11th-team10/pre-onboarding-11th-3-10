import { styled } from 'styled-components';

import Ad from '@/components/Ad';
import IssueItem from '@/components/IssueItem';
import { useIssue } from '@/context/IssueContext';
import NotFound from './NotFound';

export default function Issues() {
  const {issues, isLoading, error} = useIssue();

  if(isLoading) return <h1>Loading...💫</h1>;
  if(error) return <NotFound/>;
  
  return <IssuesContainer>
    {issues && issues.map((issue, index) => {
      if((index + 1) % 5){        
        return (<IssueItem key={issue.number} issue={issue}/>)
      } else {
        return (
            <Ad key={issue.number} issue={issue}/>
        )
      }
    })}
  </IssuesContainer>;
}

const IssuesContainer = styled.div`
  padding: 3rem 0;
`