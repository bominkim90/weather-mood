import axiosInstance from '@/lib/axios';
import getTodayDate from '@/util/getTodayDate';

export async function getTodayMood() {
  const todayDate = getTodayDate();
  const response = await axiosInstance.get(`api/v1/memo/date/${todayDate}`);
  return response.data;
}
