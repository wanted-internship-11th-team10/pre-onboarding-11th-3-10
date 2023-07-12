export type Issue = {
  title: string;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  comments: number;
  body: string;
  number: number;
};
