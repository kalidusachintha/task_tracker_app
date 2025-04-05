import { defineStore } from 'pinia';
import { ref } from 'vue'
import type { Task, TaskFormData } from '@/types/Task.ts'
import { useRouter } from "vue-router";
import useTask from '@/composables/services/TaskService.ts'
export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([]);
  const errors = ref({});
  const deletingItem = ref(0);
  const loading = ref(false);
  const form = ref<TaskFormData>({
    title: '',
    description: '',
    task_status_id: null
  })
  const router = useRouter();
  const { getTasks, createTask, getTaskById, updateTaskById, deleteTaskById} = useTask()

  const resetForm = () => {
    form.value.title = "";
    form.value.description = "";
    form.value.task_status_id = null

    errors.value = {};
  }
  const fetchTasks = async () => {
    if (loading.value) return;

    loading.value = true
    try {
      tasks.value = await getTasks();
    } catch (error) {
      console.log(error)
    }
    finally {
      loading.value = false
    }
  };

  const addTask = async () => {
    if (loading.value) return;

    loading.value = true
    errors.value = {}

    try {
      await createTask(form.value);
      await fetchTasks()
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
      form.value = await getTaskById(id);
    } catch (error: any) {
      console.log(error)
    } finally {
      loading.value = false
    }
  };

  const updateTask = async () => {
    if (loading.value) return;

    loading.value = true
    errors.value = {}

    try {
      await updateTaskById(form.value);
      await fetchTasks()
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
    if (loading.value) return;

    deletingItem.value = id;
    try {
      await deleteTaskById(id);
      await fetchTasks()
    } catch (error) {
      console.log(error)
    } finally {
      deletingItem.value = 0
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
    updateTask,
    deletingItem
  };
});
