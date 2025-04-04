import { defineStore } from 'pinia';
import { ref } from 'vue'
import TaskService from '@/services/TaskService.ts'
import type { Task } from '@/types/Task.ts'
import { useRouter } from "vue-router";
export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([]);
  const task = ref<Task[]>([]);
  const router = useRouter();
  const errors = ref({});
  const loading = ref(false);
  const form = ref({
    title: '',
    description: '',
    task_status_id: ''
  })

  const resetForm = () => {
    form.value.title = "";
    form.value.description = "";
    form.value.task_status_id = ""

    errors.value = {};
    task.value = []
  }
  const fetchTasks = async () => {
    try {
      tasks.value = await TaskService.getTasks();
    } catch (error) {
      console.log(error)
    }
  };

  const addTask = async () => {
    if (loading.value) return;

    loading.value = true
    errors.value = {}

    try {
      const newTask = await TaskService.createTask(form.value);
      tasks.value.push(newTask);
      router.push({ name: 'task.list' })
    } catch (error: any) {
      if (error?.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    } finally {
      loading.value = false
    }
  };

  const getTask = async (id:number) => {
    if (loading.value) return;

    loading.value = true
    errors.value = {}

    try {
      task.value = await TaskService.getTask(id);
    } catch (error: any) {
      console.log(error)
    } finally {
      loading.value = false
    }
  };

  const updateTask = async () => {
    console.log(task)
    if (loading.value) return;

    loading.value = true
    errors.value = {}

    try {
      await TaskService.updateTask(task.value);
      router.push({ name: 'task.list' })
    } catch (error: any) {
      if (error?.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    } finally {
      loading.value = false
    }
  };
  const deleteTask = async (id: number) => {
    try {
      await TaskService.deleteTask(id);
      await fetchTasks()
    } catch (error) {
      console.log(error)
    }
  };

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
    task,
    updateTask
  };
});
