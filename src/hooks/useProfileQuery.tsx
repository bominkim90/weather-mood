import getProfile from '@/api/profile';
import { useQuery } from '@tanstack/react-query';

export default function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
  });
}
