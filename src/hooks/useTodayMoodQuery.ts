import { getTodayMood } from '@/api/todayMood';
import { useQuery } from '@tanstack/react-query';

export default function useTodayMood(date: string) {
  return useQuery({
    queryKey: ['getTodayMood', date],
    queryFn: () => getTodayMood(date),
    enabled: !!date, // date 빈 문자열이면 쿼리 실행하지 않음
    retry: 1, // 재시도 1번 => 설정을 안하면 (기본값 3이지만) 무한 재시도가 된다.
    retryDelay: 3000, // 3초 후 재시도
    refetchOnWindowFocus: true, // 탭 포커스시 자동 재요청 (기본값 true)
    refetchOnReconnect: true, // 네트워크 재연결시 자동 재요청 (기본값 true)
    refetchInterval: false, // 재요청 간격 설정 (기본값 false)
  });
}
