import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quantum-edge-server.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
