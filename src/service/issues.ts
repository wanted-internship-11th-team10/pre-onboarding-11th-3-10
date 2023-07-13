import axios from "axios";

import getOrg from "@/utils/getOrg";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default class IssuesClient {
    private httpClient = axios.create({
      baseURL: "https://api.github.com",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      }
    })

    async getIssues() {
      const response = await this.httpClient.get('repos/facebook/react/issues?sort=comments&state=open');
      const data = response.data;

      const issues = data.map((issue: IssuesResponse) => {
        return {
          repository_url: getOrg(issue.repository_url),
          number: issue.number,
          author: issue.user.login,
          created_at: issue.created_at,
          comments: issue.comments,
          avatar: issue.user.avatar_url,
          body: issue.body,
        }
      })
      
      return issues;
    }
}

interface IssuesResponse {
  repository_url: string;
  state: string;
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
    body: string;
  };
  created_at: string;
  comments: number;
  body: string;
}

export interface Issue {
  repository_url: string[];
  number: number;
  title: string;
  author: string;
  created_at: string;
  comments: number;
  avatar: string;
  body: string;
}