import { styled } from 'styled-components';

import { useIssue } from '@/context/IssueContext';


export default function Header() {
  const {issues, isLoading, error} = useIssue();

  if(isLoading) return (<p>isLoading...💫</p>);
  if(error) return (<p>{error}</p>);

  return (
    <>
        <HeaderContainer>
          {`${issues[0]?.repository_url[0]} / ${issues[0]?.repository_url[1]}`}
        </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  width: 500px;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  font-weight: bold;
  font-size: 2rem;
`