import { getRecords } from '@/api/record';
import { RecordsStatus } from '@/model/record';
import { useQuery } from '@tanstack/react-query';

export function useFetchRecords(start: string, end: string) {
  return useQuery<RecordsStatus>({
    queryKey: ['records', start, end],
    queryFn: () => getRecords(start, end),
    enabled: !!start && !!end,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
