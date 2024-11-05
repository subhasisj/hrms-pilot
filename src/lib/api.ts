import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const requisitionApi = {
  getAll: () => api.get('/requisitions').then(res => res.data),
  getById: (id: string) => api.get(`/requisitions/${id}`).then(res => res.data),
  create: (data: any) => api.post('/requisitions', data).then(res => res.data),
  update: (id: string, data: any) => api.patch(`/requisitions/${id}`, data).then(res => res.data),
  delete: (id: string) => api.delete(`/requisitions/${id}`).then(res => res.data),
};