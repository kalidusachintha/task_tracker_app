export interface Task  {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt?: string;
}
interface Status {
  id: number;
  name: string;
  code: string;
}
