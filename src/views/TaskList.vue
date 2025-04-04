<script setup lang="ts">
import { onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore.ts'
import TaskItem from '@/components/TaskItem.vue'

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.fetchTasks()
})
</script>

<template>
  <div class="task-list">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-gray-800">Your Tasks</h2>
    </div>
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
      <TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />

      <div v-if="taskStore.tasks.length === 0" class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
        <p class="text-gray-600">You have no tasks yet. Create one to get started!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
