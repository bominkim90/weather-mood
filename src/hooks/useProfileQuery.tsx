import getProfile from '@/api/profile';
import { useQuery } from '@tanstack/react-query';

export default function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: 0, // 캐시 없이 항상 fresh 상태로 취급
    gcTime: 0, // 즉시 가비지 컬렉션
  });
}
