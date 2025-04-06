import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import axios from 'axios'
import type { TaskFormData, Task } from '@/types/Task.ts'
import useTask from '@/composables/services/TaskService.ts'

vi.mock('axios')

describe('Test task service composable', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('getTasks returns tasks list', async () => {
    const mockTasks:Task[] = [
      { id: 1, title: 'Task 1' , description: 'Task 1 description', task_status_id: 1, status:'in progress', code: '#erf443e'},
      { id: 2, title: 'Task 2' , description: 'Task 2 description', task_status_id: 2, status:'pending', code: '#er43e'},
    ];

    (axios.get as Mock).mockResolvedValueOnce({
      data: { data: mockTasks },
    })

    const { getTasks } = useTask()
    const result = await getTasks()

    expect(axios.get).toHaveBeenCalledWith('tasks')
    expect(result).toEqual(mockTasks)
  })

  it('createTask sends correct data and returns response', async () => {
    const task: TaskFormData = { title: 'New Task' , description: 'New task description', task_status_id: null}
    const mockResponse:Task = { id:1, title: 'New Task' , description: 'New task description', task_status_id: null};

    (axios.post as Mock).mockResolvedValueOnce({
      data: mockResponse,
    })

    const { createTask } = useTask()
    const result = await createTask(task)

    expect(axios.post).toHaveBeenCalledWith('tasks', task)
    expect(result).toEqual(mockResponse)
  })

  it('getTaskById fetches task by ID', async () => {
    const mockTask = { id: 1 };

    (axios.get as Mock).mockResolvedValueOnce({
      data: { data: mockTask },
    })

    const { getTaskById } = useTask()
    const result = await getTaskById(1)

    expect(axios.get).toHaveBeenCalledWith('tasks/1')
    expect(result).toEqual(mockTask)
  })

  it('updateTaskById sends updated task and returns response', async () => {
    const task: TaskFormData = { id: 1, title: 'Updated Task', task_status_id: undefined, description: '' }
    const mockUpdated = { message: 'Task updated successfully' };

    (axios.put as Mock).mockResolvedValueOnce({
      data: { data: mockUpdated },
    })

    const { updateTaskById } = useTask()
    const result = await updateTaskById(task)

    expect(axios.put).toHaveBeenCalledWith('tasks/1', task)
    expect(result).toEqual(mockUpdated)
  })

  it('deleteTaskById calls delete with correct ID', async () => {
    (axios.delete as Mock).mockResolvedValueOnce({})

    const { deleteTaskById } = useTask()
    await deleteTaskById(5)

    expect(axios.delete).toHaveBeenCalledWith('tasks/5')
  })
})
