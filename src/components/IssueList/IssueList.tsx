import { Link } from 'react-router-dom';

import { Issue } from '@/apis';
import { AdvertisementItem } from '@/components/AdvertisementItem';
import { IssueItem } from '@/components/IssueItem';
import * as S from './IssueList.styles';

interface IssueListProps {
  issues: Issue[];
}

export function IssueList({ issues }: IssueListProps) {
  return (
    <S.IssueListWrapper>
      {issues.map((issue, index) => (
        <div key={index + 1}>
          <Link to={`/${issue.number}`} style={{ cursor: 'pointer' }}>
            <IssueItem issue={issue} />
          </Link>
          <AdvertisementItem isView={(index + 1) % 4 === 0} index={index} />
        </div>
      ))}
    </S.IssueListWrapper>
  );
}
