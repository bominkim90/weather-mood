import axiosInstance from '@/lib/axios';

export default async function logout() {
  const response = await axiosInstance.post('api/v1/auth/logout');
  return response.data;
}
