import { getTodayMood } from '@/api/todayMood';
import { useQuery } from '@tanstack/react-query';

export default function useTodayMood(date: string) {
  return useQuery({
    queryKey: ['getTodayMood', date],
    queryFn: () => getTodayMood(date),
    enabled: !!date, // date 빈 문자열이면 쿼리 실행하지 않음
  });
}
