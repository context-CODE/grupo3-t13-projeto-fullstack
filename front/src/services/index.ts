import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  timeout: 15000,
});

export default api;
