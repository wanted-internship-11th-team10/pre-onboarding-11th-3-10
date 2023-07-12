import { useContext, useEffect, useState } from 'react';

import { IssueContext } from '@/context/IssueContext';

function Header() {
  const issue = useContext(IssueContext);
  const [header, setHeader] = useState({
    organizationName: '',
    repositoryName: '',
  });

  useEffect(() => {
    if (issue && issue[0] && issue?.[0].repository_url) {
      const pathParts = issue?.[0].repository_url.split('/');
      setHeader({
        organizationName: pathParts[4],
        repositoryName: pathParts[5],
      });
    }
  }, [issue]);

  return (
    <div>
      {header.organizationName} / {header.repositoryName}
    </div>
  );
}

export default Header;
