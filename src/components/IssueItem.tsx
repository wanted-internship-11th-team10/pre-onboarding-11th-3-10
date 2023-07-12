import { AiOutlineComment } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
interface IssueItemProps {
  issue: IssueType;
}

const IssueItem = ({ issue }: IssueItemProps) => {
  const date = issue.created_at.substring(0, 10);
  return (
    <Link to={`/${issue.number}`} style={{ textDecoration: 'none' }}>
      <ItemBox>
        <Title>
          <span className="number">{'#' + issue.number}</span>
          <span className="title">{issue.title}</span>
          <span className="user">{issue.user}</span>
        </Title>
        <Info>
          <span className="date">{date}</span>
          <div className="comments">
            <AiOutlineComment color="#888" />
            <span>{issue.comments}</span>
          </div>
        </Info>
      </ItemBox>
    </Link>
  );
};

const ItemBox = styled.div`
  width: 800px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 10px 10px;
  background-color: #f2f4fe;
  border-radius: 5px;
  box-shadow: 0px 5px 5px 0px #ddd;
  color: #000;
  text-decoration: none;
  &:hover {
    * {
      color: #fff !important;
    }
    background-color: #1239ff;
    transition: background 0.3s;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 10px;
  gap: 30px;
  .number {
    font-size: 15px;
    font-weight: 500;
  }
  .title {
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user {
    color: #233dff;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  .comments {
    display: flex;
    font-size: 14px;
    color: #888;
  }
  .date {
    font-size: 14px;
    color: #888;
  }
`;
export default IssueItem;
