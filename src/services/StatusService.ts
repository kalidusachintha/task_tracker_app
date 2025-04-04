import axios from 'axios';

const API_URL = 'statuses';

export default {
  async getAllStatuses() {
    try {
      const response = await axios.get(API_URL);
      return response.data.data;
    } catch (error) {
      console.log(error)
    }

  },
};
