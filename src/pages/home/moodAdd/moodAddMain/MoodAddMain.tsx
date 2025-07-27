import Button from '@/components/button/Button';
import MoodSelect from './MoodSelect';
import MoodMemo from './MoodMemo';
import { useState } from 'react';
import useAddMood from '@/hooks/useAddMood';
import getTodayDate from '@/util/getTodayDate';
import ErrorMsg from '@/components/error/ErrorMsg';

interface EmotionData {
  mood: number;
  memo: string;
  date: string;
}

export default function MoodAddMain() {
  const todayDate = getTodayDate();

  const [emotionData, setEmotionData] = useState<EmotionData>({
    mood: 0,
    memo: '',
    date: todayDate,
  });
  const { mutate: addMoodMutate, isPending, isError, error } = useAddMood();

  const saveMood = () => {
    console.log('saveMood');
    addMoodMutate(emotionData, {
      onSuccess: () => {
        console.log('success');
      },
      onError: () => {
        console.log('error');
      },
    });
  };

  return (
    <div>
      {/* 감정 선택 */}
      <MoodSelect setEmotionData={setEmotionData} />

      {/* 감정 한줄 평 */}
      <MoodMemo setEmotionData={setEmotionData} />

      {/* 저장 버튼 */}
      <Button
        theme="POSITIVE"
        title="Save Mood"
        addClass="w-full rounded-full"
        onClick={saveMood}
        disabled={isPending}
      />
      {isError && <ErrorMsg errorMessage={error.message} />}
    </div>
  );
}
