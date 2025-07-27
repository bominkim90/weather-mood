import axiosInstance from '@/lib/axios';

interface AddMoodData {
  mood: number;
  memo: string;
  date: string;
}

export default function addMood(data: AddMoodData) {
  return axiosInstance.post('api/v1/memo', data);
}
