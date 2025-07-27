import addMood from '@/api/addMood';
import { useMutation } from '@tanstack/react-query';

export default function useAddMood() {
  return useMutation({
    mutationFn: addMood,
  });
}
