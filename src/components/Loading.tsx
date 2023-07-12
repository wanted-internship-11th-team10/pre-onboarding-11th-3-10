import { styled } from 'styled-components';

const Loading = () => {
  return (
    <Content>
      Loading
      <span></span>
      <span></span>
      <span></span>
    </Content>
  );
};

const Content = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  color: #777;
  @keyframes Bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  span {
    position: relative;
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: #777;
    border-radius: 50%;
    margin-left: 7px;
  }
  span:nth-child(1) {
    animation: Bounce 0.3s;
  }
  span:nth-child(2) {
    animation: Bounce 0.3s 0.1s;
  }
  span:nth-child(3) {
    animation: Bounce 0.3s 0.2s;
  }
`;
export default Loading;
