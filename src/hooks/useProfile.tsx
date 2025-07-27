import getProfile from '@/api/profile';
import { useQuery } from '@tanstack/react-query';

export default function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
}
