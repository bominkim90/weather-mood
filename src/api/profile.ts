import axiosInstance from '@/lib/axios';

export default async function getProfile() {
  const response = await axiosInstance.get('api/v1/profile');
  return response.data;
}
