export interface Issue {
  id: number;
  state: string; // 이슈 상태
  number: number; // 이슈 번호
  title: string; // 이슈 제목
  user: { login: string; avatar_url: string }; // 작성자, 작성자 프로필 이미지
  created_at: string; // 작성일
  comments: number; // 코멘트 수
  body: string; // 본문
}

export interface IssueType {
  issues: Issue[];
  id: number;
  state: string; // 이슈 상태
  number: number; // 이슈 번호
  title: string; // 이슈 제목
  user: { login: string; avatar_url: string }; // 작성자, 작성자 프로필 이미지
  created_at: string; // 작성일
  comments: number; // 코멘트 수
  body: string; // 본문
}
