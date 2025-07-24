import axiosInstance from '@/lib/axios';

export default async function searchLocation(cityName: string) {
  console.log(import.meta.env.VITE_OPEN_WEATHER_API_KEY);
  const response = await axiosInstance.get(
    // `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${5}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
    `/searchLocation?q=${cityName}`
  );
  return response.data;
}
