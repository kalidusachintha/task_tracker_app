export interface Task {
  id?: number
  title: string
  description: string
  status?: string
  task_status_id?: number | null
  code?: string
  createdAt?: string
}

export type TaskFormData = {
  id?: number
  title: string
  description: string
  task_status_id?: number | null
}

export interface Status {
  id: number
  name: string
  code: string
}
