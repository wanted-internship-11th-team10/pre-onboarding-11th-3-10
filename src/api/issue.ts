import { client } from '.';

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

interface Issue {
  id: 1;
}

export async function getIssue(): Promise<Issue[]> {
  const response = await client.get('/issue');
  return response.data;
}
