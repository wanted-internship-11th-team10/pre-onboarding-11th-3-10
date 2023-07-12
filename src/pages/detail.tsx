// ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
import { useEffect, useState } from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { getDetail } from '@/api/detail';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState<DetailDTO>();

  const fetchIssue = async (id: string) => {
    const res = await getDetail(id);
    setData({
      title: res?.data.title,
      created_at: res?.data.created_at.substring(0, 10),
      user: { login: res?.data.user.login, avatar_url: res?.data.user.avatar_url },
      number: res?.data.number,
      body: res?.data.body,
      comments: res?.data.comments,
    });
  };

  useEffect(() => {
    if (id) {
      fetchIssue(id as string);
    }
  }, [id]);
  return (
    <Container>
      <Title>
        <span className="id">{'#' + data?.number}</span>
        <h2>{data?.title}</h2>
        <div className="comments">
          <AiOutlineComment />
          <span>{data?.comments}</span>
        </div>
        <TitleBottom>
          <span className="date">{data?.created_at}</span>
          <ProfileArea>
            <img src={data?.user.avatar_url} alt="프로필이미지" />
            <span>{data?.user.login}</span>
          </ProfileArea>
        </TitleBottom>
      </Title>
      <ReactMarkdown children={data?.body as string} />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  img {
    position: relative;
    width: 100%;
  }
`;
const Title = styled.div`
  position: relative;
  display: block;
  padding-bottom: 20px;
  .id {
    font-size: 18px;
    font-weight: bold;
    color: #1239ff;
  }
  h2 {
    margin: 10px 0 30px;
    font-size: 40px;
  }
  .comments {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    color: #888;
    span {
      font-size: 15px;
      margin-left: 5px;
    }
  }
`;
const TitleBottom = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .date {
    font-size: 14px;
    color: #888;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e5e9ff;
  }
`;
const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    margin-left: 10px;
    font-size: 15px;
    color: #555;
  }
`;
export default Detail;
