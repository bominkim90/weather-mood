import axiosInstance from '@/lib/axios';

export default async function searchLocation(cityName: string) {
  const response = await axiosInstance.get(
    `/api/v1/weather/search?q=${cityName}`
  );
  return response.data;
}
