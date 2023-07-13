import { client } from '.';

import { Issue } from '@/types/issue';

export async function getIssue(page: number): Promise<Issue[]> {
  const response = await client.get(`/issues?sort=comments&direction=desc&page=${page}&per_page=10`);
  return response.data;
}

export async function getIssueDetail(issue_number: number): Promise<Issue> {
  const response = await client.get(`/issues/${issue_number}`);
  return response.data;
}
