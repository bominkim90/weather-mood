import axiosInstance from '@/lib/axios';

export async function getTodayMood(date: string) {
  const response = await axiosInstance.get(`/api/v1/weather?date=${date}`);
  return response.data;
}
