import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export function ErrorPage() {
  const navigate = useNavigate();

  const handleClickBack = () => navigate(-1);

  return (
    <Container>
      <ErrorMessage>
        <h1>404</h1>
        Not Found
      </ErrorMessage>
      <BackButton onClick={handleClickBack}>이전으로</BackButton>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  margin: auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorMessage = styled.div`
  font-size: 30px;

  h1 {
    font-weight: 800;
    font-size: 80px;
    margin: 0;
  }
`;

const BackButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 1px 1px 3px 1px rgb(100, 100, 100, 0.5);
  margin: 10px;
  cursor: pointer;
`;
