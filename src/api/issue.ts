import { client } from '.';

import { Issue } from '@/types/issue';

export async function getIssue(): Promise<Issue[]> {
  const response = await client.get('/issues?sort=comments&direction=desc');
  return response.data;
}
