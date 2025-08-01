import searchLocation from '@/api/searchLocation';
import { useQuery } from '@tanstack/react-query';

export default function useSearchLocation(cityName: string) {
  return useQuery({
    queryKey: ['searchLocation', cityName],
    queryFn: () => searchLocation(cityName),
    enabled: !!cityName, // cityName이 빈 문자열이면 쿼리 실행하지 않음
    retry: false,
  });
}
