import Button from '@/components/button/Button';
import MoodSelect from './MoodSelect';
import MoodMemo from './MoodMemo';
import { useState } from 'react';
import { useAddRecordQuery } from '@/hooks/useRecordQuery';
import getTodayDate from '@/util/getTodayDate';
import ErrorMsg from '@/components/error/ErrorMsg';
import { AddMoodData } from '@/model/addMoodData';
import { useNavigate } from 'react-router-dom';
import { useUserLocationStore } from '@/store/useUserLocationStore';

export default function MoodAddMain() {
  // 로그인 성공 시 담기는 location(cityName)정보
  const { location } = useUserLocationStore();
  console.log('location : ', location);
  const navigate = useNavigate();
  const todayDate = getTodayDate();

  const [moodData, setMoodData] = useState<AddMoodData>({
    location: location,
    feelingId: 0,
    memo: '',
    date: todayDate,
  });
  const {
    mutate: addRecordMutate,
    isPending,
    isError,
    error,
  } = useAddRecordQuery();

  // 감정 등록 핸들러
  const saveRecordHandler = () => {
    if (!location || moodData.feelingId === 0 || moodData.memo === '') {
      console.log(location);
      console.log(moodData.feelingId);
      console.log(moodData.memo);
      alert('감정 선택 후 등록해주세요.');
      return;
    }

    addRecordMutate(moodData, {
      onSuccess: () => {
        navigate('/');
      },
      onError: () => {
        alert('감정 등록 실패');
      },
    });
  };

  return (
    <div>
      {/* 감정 선택 */}
      <MoodSelect setMoodData={setMoodData} />

      {/* 감정 한줄 평 */}
      <MoodMemo setMoodData={setMoodData} />

      {/* 저장 버튼 */}
      <Button
        theme="POSITIVE"
        title="Save Mood"
        addClass="w-full rounded-full"
        onClick={saveRecordHandler}
        disabled={isPending}
      />
      {isError && <ErrorMsg errorMessage={error.message} />}
    </div>
  );
}
