<script setup lang="ts">
import { onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore.ts'
import TaskItemView from '@/views/TaskItemView.vue'
import IconSpinner from '@/components/IconSpinner.vue'

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
      <div
        v-if="taskStore.tasks.length === 0"
        class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center"
      >
        <IconSpinner v-if="taskStore.loading"> Loading..</IconSpinner>
        <p class="text-gray-600" v-else>You have no tasks yet. Create one to get started!</p>
      </div>
      <div v-else>
        <TaskItemView
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task"
          :isDeleting="taskStore.deletingItem == task.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
