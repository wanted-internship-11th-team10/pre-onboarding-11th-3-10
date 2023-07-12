interface IssueType {
  title: string;
  number: number;
  comments: number;
  user: string;
  created_at: string;
}
interface IssueDTO {
  title: string;
  number: number;
  state: string;
  comments: number;
  user: {
    login: string;
  };
  created_at: string;
}
interface DetailDTO {
  title: string;
  number: number;
  comments: number;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
}
