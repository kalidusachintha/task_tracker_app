import { defineStore } from 'pinia'
import { ref } from 'vue'
import StatusService from '@/services/StatusService.ts'

export const useStatusStore = defineStore('statusStore', ()=> {

  const statuses = ref([])

  const getAllStatuses = async () => {

    try {
      statuses.value = await StatusService.getAllStatuses();
    } catch (error) {
      console.log(error)
    }
  };

  return {
    getAllStatuses,
    statuses
  };
})
