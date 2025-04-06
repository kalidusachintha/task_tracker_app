<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore.ts'
import type { Task } from '@/types/Task.ts'
import IconSpinner from '@/components/IconSpinner.vue'
import useUtility from '@/composables/utility.ts'
import useNotification from '@/composables/notification.ts'

const taskStore = useTaskStore()
const { formatStatus } = useUtility()
const { confirm, success, error } = useNotification()

const props = defineProps<{ task: Task; isDeleting: boolean }>()

const handleDelete = async () => {
  confirm({
    title: 'Are you sure?',
    text: "You won't be able to revert this action!",
    icon: 'warning',
  }).then(async (result) => {
    if (result.isConfirmed) {
      const result = await taskStore.deleteTask(props.task.id)
      if (result) {
        success('Task deleted successfully')
      } else {
        error('Oops!', 'There was something issue')
      }
    }
  })

}
</script>

<template>
  <div
    class="py-4 px-6 hover:bg-gray-200 transition-colors justify-between rounded-lg shadow-sm border border-gray-200"
  >
    <div class="flex justify-between">
      <div class="flex-1">
        <div class="flex items-center">
          <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
          <span
            :style="{ color: task.code }"
            class="ml-3 px-3 py-1 text-xs font-medium rounded-full"
          >
            {{ formatStatus(task.status) }}
          </span>
        </div>
        <p class="mt-1 text-gray-600">{{ task.description }}</p>
      </div>

      <div class="flex items-center space-x-2 ml-4">
        <router-link
          :to="props.isDeleting ? {} : { name: 'task.edit', params: { id: task.id } }"
          :class="[
            'p-2 text-blue-600 transition-colors',
            props.isDeleting ? 'text-gray-400 cursor-not-allowed' : 'hover:text-blue-800',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </router-link>
      </div>
      <button @click="handleDelete" class="p-2 text-red-600 hover:text-red-800 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          v-show="!props.isDeleting"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <IconSpinner v-if="props.isDeleting" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
