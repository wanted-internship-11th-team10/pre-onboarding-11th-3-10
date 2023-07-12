import IssueItem from './IssueItem';
import { AdBanner } from '../common';

interface IssueListProps {
  data: IssueType[];
}
const IssueList = ({ data }: IssueListProps) => {
  return data?.map((issue: IssueType, i: number) => {
    return i > 1 && i % 5 == 4 ? <AdBanner key={i} /> : <IssueItem key={i} issue={issue} />;
  });
};

export default IssueList;
