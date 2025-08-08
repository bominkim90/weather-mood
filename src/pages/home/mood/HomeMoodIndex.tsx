import useTodayMood from '@/hooks/useTodayMoodQuery';
import { emotions } from '@/model/emotions';
import { useNavigate } from 'react-router-dom';

export default function HomeMoodIndex() {
  const feelingButtonStyle =
    'flex items-center justify-center w-[128px] h-[128px] rounded-full overflow-hidden';
  const navigate = useNavigate();

  const {
    data: todayFeelingDataArray,
    isPending,
    isError,
    error,
  } = useTodayMood();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(
    '오늘 감정기록 불러오기 todayFeelingDataArray : ',
    todayFeelingDataArray
  );
  const todayFeelingData = todayFeelingDataArray[0];

  const addMoodButtonClick = () => {
    navigate('/mood/add');
  };

  return (
    <div className="HomeFeeling flex flex-col justify-center items-center gap-4">
      {todayFeelingDataArray.length > 0 ? (
        <>
          <div className={feelingButtonStyle}>
            <img
              className="block w-full h-full"
              src={`/icons/emotion/emotion_${todayFeelingData.feelingId}.svg`}
              alt={emotions[Number(todayFeelingData.feelingId) - 1].name}
            />
          </div>
          <p className="text-text-gray text-sm">{todayFeelingData.memo}</p>
        </>
      ) : (
        <>
          <button
            className={`${feelingButtonStyle} box-white`}
            onClick={addMoodButtonClick}
          >
            <img
              className="block w-[64px] h-[64px]"
              src={'/icons/plus_black.svg'}
              alt="plus"
            />
          </button>
          <p className="text-text-gray text-sm">오늘 기분을 기록해보세요</p>
        </>
      )}
    </div>
  );
}
