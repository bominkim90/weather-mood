import Button from '@/components/button/Button';
import MoodSelect from './MoodSelect';
import MoodMemo from './MoodMemo';
import { useState } from 'react';
import useAddMood from '@/hooks/useAddMoodQuery';
import getTodayDate from '@/util/getTodayDate';
import ErrorMsg from '@/components/error/ErrorMsg';
import { AddMoodData } from '@/model/addMoodData';
import { useNavigate } from 'react-router-dom';

export default function MoodAddMain() {
  const navigate = useNavigate();
  const todayDate = getTodayDate();

  const [moodData, setMoodData] = useState<AddMoodData>({
    location: '',
    feelingId: 0,
    memo: '',
    date: todayDate,
  });
  const { mutate: addMoodMutate, isPending, isError, error } = useAddMood();

  // 감정 등록 핸들러
  const saveMoodHandler = () => {
    // 감정 등록
    addMoodMutate(moodData, {
      onSuccess: () => {
        navigate('/');
      },
      onError: () => {
        console.log('error');
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
        onClick={saveMoodHandler}
        disabled={isPending}
      />
      {isError && <ErrorMsg errorMessage={error.message} />}
    </div>
  );
}
