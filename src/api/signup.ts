import axiosInstance from '@/lib/axios';
import { Signup } from '@/model/signup';

export async function postSignup({
  email,
  nickName,
  password,
  confirm_password,
  cityName,
}: Signup) {
  const response = await axiosInstance.post('api/v1/auth/signup', {
    email,
    nickName,
    password,
    confirm_password,
    cityName,
  });
  return response.data;
}
