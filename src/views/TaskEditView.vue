<script setup lang="ts">

import { useTaskStore } from '@/stores/taskStore.ts'
import { useStatusStore } from '@/stores/statusStore.ts'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ButtonUtility from '@/components/ButtonUtility.vue'
import useUtility from '@/composables/utility.ts'

const route = useRoute();
const taskStore = useTaskStore()
const statusStore = useStatusStore()
const { formatStatus } = useUtility()

onMounted( () => {
  taskStore.getTask(+route.params.id)
  statusStore.getAllStatuses()
})

onUnmounted(() =>{
  taskStore.resetForm()
})

</script>

<template>
  <h1 class="text-3xl font-bold text-gray-800 mb-6">Update Task - {{ taskStore.form.title }}</h1>
  <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
    <form @submit.prevent="taskStore.updateTask" novalidate class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          v-model="taskStore.form.title"
          id="title"
          name="title"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter task title"
          :disabled="taskStore.loading"
        />
        <ValidationError :errors="taskStore.errors" field="title" />
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <input
          v-model="taskStore.form.description"
          id="description"
          name="description"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter task description"
          :disabled="taskStore.loading"
        />
      </div>
      <div>
        <label for="status" class="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          id="status"
          v-model="taskStore.form.task_status_id"
          class="cw-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="" selected></option>
          <option v-for="status in statusStore.statuses" :key="status.id" :value="status.id">
            {{ formatStatus(status.name) }}
          </option>
        </select>
      </div>
      <div class="flex space-x-4 pt-4">
        <ButtonUtility :loading="taskStore.loading">
          Save
        </ButtonUtility>
        <RouterLink :to="{ name: 'task.list' }" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors">
          Cancel
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>

