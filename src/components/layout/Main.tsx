import useConditionalTodayMood from '@/hooks/useConditionalTodayMoodQuery';
import { emotions } from '@/model/emotions';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const mainStyle =
  'absolute top-0 left-0 right-0 bottom-0 w-full flex-1 overflow-y-auto p-[64px_16px_90px]';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup';

  // 조건부로 API 요청 실행 (인증 페이지에서는 요청하지 않음)
  const { data: todayMoodData, isSuccess: isTodayMoodSuccess } =
    useConditionalTodayMood(!isAuthPage);

  return (
    <main
      className={mainStyle}
      style={{
        backgroundColor:
          isTodayMoodSuccess && !isAuthPage && todayMoodData.length > 0
            ? `${emotions.find((emotion) => emotion.id === todayMoodData[0].id)?.color}`
            : '',
      }}
    >
      {children}
    </main>
  );
}
