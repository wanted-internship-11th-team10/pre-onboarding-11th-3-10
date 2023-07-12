import { client } from '.';

import { Issue } from '@/types/issue';

export async function getIssue(): Promise<Issue[]> {
  const response = await client.get('/issues?sort=comments&direction=desc&per_page=10');
  return response.data;
}

export async function getIssueDetail(issue_number: number): Promise<Issue> {
  const response = await client.get(`/issues/${issue_number}`);
  return response.data;
}
