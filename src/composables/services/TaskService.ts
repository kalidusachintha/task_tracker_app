import axios from 'axios'
import type { TaskFormData } from '@/types/Task.ts'

const API_URL = import.meta.env.VITE_API_TASK_URL

export default function useTask() {
  const getTasks = async () => {
    const response = await axios.get(API_URL)

    return response.data.data
  }

  const createTask = async (task: TaskFormData) => {
    const response = await axios.post(API_URL, task)

    return response.data
  }

  const getTaskById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`)

    return response.data.data
  }
  const updateTaskById = async (task: TaskFormData) => {
    const response = await axios.put(`${API_URL}/${task.id}`, task)

    return response.data.data
  }

  const deleteTaskById = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`)
  }

  return {
    getTasks,
    createTask,
    getTaskById,
    updateTaskById,
    deleteTaskById,
  }
}
