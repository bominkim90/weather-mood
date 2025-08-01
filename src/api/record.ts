import axiosInstance from '@/lib/axios';

export async function getRecords(start: string, end: string) {
  const response = await axiosInstance.get(
    `/api/v1/record?start=${start}&end=${end}`
  );
  return response.data;
}
