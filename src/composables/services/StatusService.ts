import axios from 'axios';

const API_URL = 'statuses';

export default function useStatus(){
  const getAll = async () => {
      const response = await axios.get(API_URL);

      return response.data.data;
  }

  return {
    getAll
  }
};
