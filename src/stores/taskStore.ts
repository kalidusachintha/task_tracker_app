import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Task, TaskFormData } from '@/types/Task.ts'
import { useRouter } from 'vue-router'
import useTask from '@/composables/services/TaskService.ts'
import useNotification from '@/composables/notification.ts'
export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([])
  const errors = ref({})
  const deletingItem = ref(0)
  const loading = ref(false)
  const form = ref<TaskFormData>({
    title: '',
    description: '',
    task_status_id: null,
  })

  const router = useRouter()
  const { getTasks, createTask, getTaskById, updateTaskById, deleteTaskById } = useTask()
  const { confirm, success, error } = useNotification()

  const resetForm = () => {
    form.value.title = ''
    form.value.description = ''
    form.value.task_status_id = null

    errors.value = {}
  }
  const fetchTasks = async () => {
    if (loading.value) return

    loading.value = true
    try {
      tasks.value = await getTasks()
    } catch (exception: any) {
      error('Oops!', 'There was something issue')
    } finally {
      loading.value = false
    }
  }

  const addTask = async () => {
    if (loading.value) return

    loading.value = true
    errors.value = {}

    try {
      await createTask(form.value)
      await fetchTasks()
      router.push({ name: 'task.list' })
      success('Task saved successfully')
    } catch (exception: any) {
      if (exception?.response.status === 422) {
        errors.value = exception.response.data.errors
        error('Oops!', 'There was something issue')
      }
    } finally {
      loading.value = false
    }
  }

  const getTask = async (id: number) => {
    if (loading.value) return

    loading.value = true
    errors.value = {}

    try {
      form.value = await getTaskById(id)
    } catch (exception: any) {
      error('Oops!', 'There was something issue')
    } finally {
      loading.value = false
    }
  }

  const updateTask = async () => {
    if (loading.value) return

    loading.value = true
    errors.value = {}

    try {
      await updateTaskById(form.value)
      await fetchTasks()
      router.push({ name: 'task.list' })
      success('Task updated successfully')
    } catch (exception: any) {
      if (exception?.response.status === 422) {
        errors.value = exception.response.data.errors
        error('Oops!', 'There was something issue')
      }
    } finally {
      loading.value = false
    }
  }
  const deleteTask = async (id: number) => {
    confirm({
      title: 'Are you sure?',
      text: "You won't be able to revert this action!",
      icon: 'warning',
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (loading.value) return

        deletingItem.value = id
        try {
          await deleteTaskById(id)
          await fetchTasks()
          success('Task deleted successfully')
        } catch (exception: any) {
          error('Oops!', 'There was something issue')
        } finally {
          deletingItem.value = 0
        }
      }
    })
  }

  return {
    tasks,
    fetchTasks,
    addTask,
    deleteTask,
    form,
    loading,
    errors,
    resetForm,
    getTask,
    updateTask,
    deletingItem,
  }
})
