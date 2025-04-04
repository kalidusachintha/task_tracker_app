import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '@/views/TaskList.vue'
import TaskCreateView from '@/views/TaskCreateView.vue'
import TaskEditView from '@/views/TaskEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task.list',
      component: TaskList,
    },
    {
      path: '/task/create',
      name: 'task.create',
      component : TaskCreateView,
    },
    {
      path: '/task/edit/:id',
      name: 'task.edit',
      component : TaskEditView,
    },
  ],
})

export default router
