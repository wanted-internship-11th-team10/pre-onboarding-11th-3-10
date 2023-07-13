export interface Issue {
  id: number;
  state: string;
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  comments: number;
  body: string;
  repository_url: string;
}
