import { getTodayMood } from '@/api/todayMood';
import { useQuery } from '@tanstack/react-query';

export default function useConditionalTodayMood(enabled: boolean = true) {
  return useQuery({
    queryKey: ['getTodayMood'],
    queryFn: () => getTodayMood(),
    enabled, // 조건부로 쿼리 실행 여부 제어
    retry: 1,
    retryDelay: 3000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: false,
  });
}
