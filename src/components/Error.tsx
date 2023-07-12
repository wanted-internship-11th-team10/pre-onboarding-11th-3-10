import { styled } from 'styled-components';

const Error = () => {
  return <Container>데이터를 불러오는 데 실패했습니다.(404)</Container>;
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export default Error;
