import axiosInstance from '@/lib/axios';
import getTodayDate from '@/util/getTodayDate';

export async function getTodayWeather() {
  const todayDate = getTodayDate();
  const response = await axiosInstance.get(`/api/v1/weather?date=${todayDate}`);
  return response.data;
}
