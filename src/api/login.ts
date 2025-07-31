import axiosInstance from '@/lib/axios';

interface loginData {
  email: string;
  password: string;
}

export default async function login(data: loginData) {
  const response = await axiosInstance.post('api/v1/auth/login', data);
  return response.data;
}
