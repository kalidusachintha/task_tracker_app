import axios from 'axios'

const API_URL = import.meta.env.VITE_API_STATUS_URL

export default function useStatus() {
  const getAll = async () => {
    const response = await axios.get(API_URL)

    return response.data.data
  }

  return {
    getAll,
  }
}
