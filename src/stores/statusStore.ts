import { defineStore } from 'pinia'
import { ref } from 'vue'
import useStatus from '@/composables/services/StatusService.ts'
import type { Status } from '@/types/Task.ts'

export const useStatusStore = defineStore('statusStore', () => {
  const statuses = ref<Status[]>([])
  const { getAll } = useStatus()

  const getAllStatuses = async () => {
    try {
      statuses.value = await getAll()
      return true
    } catch (exception) {
      console.log(exception)
      return false
    }
  }

  return {
    getAllStatuses,
    statuses,
  }
})
