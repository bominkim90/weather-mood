import login from '@/api/login';
import { useMutation } from '@tanstack/react-query';

export default function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
