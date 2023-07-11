import { client } from '.';

import { IssueType } from '@/types/issue';

export async function getIssue(): Promise<IssueType[]> {
  const response = await client.get('/issues');
  return response.data;
}

export async function getIssueDetail(issue_number: number): Promise<IssueType[]> {
  const response = await client.get(`/issues/${issue_number}`);
  return response.data;
}
