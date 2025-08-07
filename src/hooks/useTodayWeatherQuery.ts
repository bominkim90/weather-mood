import { getTodayWeather } from '@/api/todayWeather';
import { useQuery } from '@tanstack/react-query';

export default function useTodayWeather() {
  return useQuery({
    queryKey: ['getTodayWeather'],
    queryFn: () => getTodayWeather(),
    retry: 1,
    retryDelay: 3000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: false,
  });
}
