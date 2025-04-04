import axios from 'axios';

const API_URL = 'tasks';

export default {
  async getTasks() {
      const response = await axios.get(API_URL);

      return response.data.data;
  },

  async createTask(task:any) {
      const response = await axios.post(API_URL, task);

      return response.data;
  },

  async getTask(id:number) {
      const response = await axios.get(`${API_URL}/${id}`);

      return response.data.data;
  },

  async updateTask(task:any) {
      const response = await axios.put(`${API_URL}/${task.id}`, task);

      return response.data.data;
  },

  async deleteTask(id: number) {
      await axios.delete(`${API_URL}/${id}`);
  },
};
