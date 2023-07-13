import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation } from "react-router-dom";
import remarkGfm from 'remark-gfm'
import { styled } from "styled-components";

import IssueItem from "@/components/IssueItem";


export default function Detail() {
  const {state: {issue}} = useLocation();
  const {avatar, body, title} = issue;

  return <DetailContainer>
    <Header>
      <Img src={avatar} alt={title} />
      <IssueItem issue={issue}/>
    </Header>
    <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
  </DetailContainer>;
}

const DetailContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
`