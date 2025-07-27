import axiosInstance from '@/lib/axios';

interface loginData {
  email: string;
  password: string;
}

export default function login(data: loginData) {
  return axiosInstance.post('api/v1/auth/login', data);
}
