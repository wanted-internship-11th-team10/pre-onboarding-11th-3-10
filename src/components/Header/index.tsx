import { useContext, useEffect, useState } from 'react';

import { IssueContext } from '@/context/IssueContext';
import { HeaderContainer } from './style';

function Header() {
  const { loading, issues } = useContext(IssueContext);
  const [header, setHeader] = useState({
    organizationName: '',
    repositoryName: '',
  });

  useEffect(() => {
    if (issues && issues[0] && issues?.[0].repository_url) {
      const pathParts = issues?.[0].repository_url.split('/');
      setHeader({
        organizationName: pathParts[4],
        repositoryName: pathParts[5],
      });
    }
  }, [issues]);

  return (
    <HeaderContainer>
      {loading ? (
        ''
      ) : (
        <>
          {header.organizationName} / {header.repositoryName}
        </>
      )}
    </HeaderContainer>
  );
}

export default Header;
