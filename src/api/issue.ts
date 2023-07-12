import { client } from '.';

import { Issue } from '@/types/issue';

export async function getIssue(): Promise<Issue[]> {
  const response = await client.get('/issues?sort=comments&direction=desc&per_page=10');
  return response.data;
}
