import postRecord, {
  getRecords,
  removeRecord,
  updateRecord,
} from '@/api/record';
import { MoodRecordsStatus } from '@/model/record';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// 감정 조회
export function useGetRecordsQuery(start: string, end: string) {
  return useQuery<MoodRecordsStatus>({
    queryKey: ['moodRecords', start, end],
    queryFn: () => getRecords(start, end),
    enabled: !!start && !!end,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}

// 감정 등록
export function useAddRecordQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRecord,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moodRecords'] }); // 감정 기록 수동 갱신
    },
  });
}

// 감정 수정
export function useUpdateRecordQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      recordId,
      data,
    }: {
      recordId: number;
      data: { feelingId: number; memo: string };
    }) => updateRecord(recordId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moodRecords'] }); // 감정 기록 수동 갱신
    },
  });
}

// 감정 삭제
export function useDeleteRecordQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (recordId: number) => removeRecord(recordId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moodRecords'] }); // 감정 기록 수동 갱신
    },
  });
}
