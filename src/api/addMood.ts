import axiosInstance from '@/lib/axios';
import { AddMoodData } from '@/model/addMoodData';

export default function addMood(data: AddMoodData) {
  return axiosInstance.post('api/v1/memo', data);
}
