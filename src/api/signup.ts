import axiosInstance from '@/lib/axios';
import { Signup } from '@/model/signup';

export async function postSignup({
  email,
  username,
  password,
  confirmPassword,
  location,
}: Signup) {
  const response = await axiosInstance.post('api/v1/auth/signup', {
    email,
    username,
    password,
    confirmPassword,
    location,
  });
  return response.data;
}
