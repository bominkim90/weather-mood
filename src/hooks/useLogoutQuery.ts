import logout from '@/api/logout';
import { useMutation } from '@tanstack/react-query';

export default function useLogoutQuery() {
  return useMutation({
    mutationFn: logout,
  });
}
