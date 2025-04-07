import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '@/views/TaskListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task.list',
      component: TaskListView,
    },
    {
      path: '/task/create',
      name: 'task.create',
      component: () => import('@/views/TaskCreateView.vue'),
    },
    {
      path: '/task/edit/:id',
      name: 'task.edit',
      component: () => import('@/views/TaskEditView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'task.list' },
    },
  ],
})

export default router
