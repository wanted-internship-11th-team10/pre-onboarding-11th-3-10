import { ErrorContainer } from './style';

interface ErrorPropsType {
  message: string;
}

function Error({ message }: ErrorPropsType) {
  return <ErrorContainer>Error: {message}</ErrorContainer>;
}

export default Error;
