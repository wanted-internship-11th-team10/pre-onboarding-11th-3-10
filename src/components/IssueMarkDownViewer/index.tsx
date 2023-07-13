import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface IssueMarkDownViewerProps {
  content: string;
}

function IssueMarkDownViewer({ content }: IssueMarkDownViewerProps) {
  return <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />;
}

export default IssueMarkDownViewer;
