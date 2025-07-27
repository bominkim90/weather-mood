import useTodayMood from '@/hooks/useTodayMood';
import { useNavigate } from 'react-router-dom';

export default function HomeFeeling() {
  const navigate = useNavigate();
  // const { data: todayMoodData, isPending, isError, error } = useTodayMood(date);
  // if (isPending) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // 가상 데이터
  const todayMoodData = {
    emotion: null,
  };

  let emotionData = null;
  let emotionIcon = null;
  if (!todayMoodData.emotion) {
    emotionData = {
      name: 'Add Your Mood',
      description: 'How are you feeling today?',
    };
    emotionIcon = '/icons/plus_black.svg';
  } else {
    emotionData = todayMoodData.emotion;
    emotionIcon = `/icons/emotion/emotion_${emotionData.id}.svg`;
  }

  const addMoodButtonClick = () => {
    navigate('/mood/add');
  };

  return (
    <div className="HomeFeeling flex flex-col justify-center items-center gap-4">
      <button
        className="flex items-center justify-center box-white w-[128px] h-[128px] rounded-full"
        onClick={addMoodButtonClick}
      >
        <img
          className="block w-[50px] h-[48px]"
          src={emotionIcon}
          alt={'그냥 쏘쏘'}
        />
      </button>
      <strong className="text-lg font-light">{emotionData?.name}</strong>
      <p className="text-text-gray text-sm">{emotionData?.description}</p>
    </div>
  );
}
