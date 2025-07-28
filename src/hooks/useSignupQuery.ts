import { postSignup } from '@/api/signup';
import { useMutation } from '@tanstack/react-query';

export default function useSignup() {
  return useMutation({
    mutationFn: postSignup,
  });
}
