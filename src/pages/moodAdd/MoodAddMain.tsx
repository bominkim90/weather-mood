import Button from '@/components/button/Button';
import MoodSelect from './MoodSelect';
import MoodMemo from './MoodMemo';
import { useState } from 'react';
import { useAddRecordQuery } from '@/hooks/useRecordQuery';
import getTodayDate from '@/util/getTodayDate';
import ErrorMsg from '@/components/error/ErrorMsg';
import { AddMoodData } from '@/model/addMoodData';
import { useNavigate } from 'react-router-dom';
import getProfile from '@/api/profile';

export default function MoodAddMain() {
  const navigate = useNavigate();
  const todayDate = getTodayDate();

  const [moodData, setMoodData] = useState<AddMoodData>({
    location: '',
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
    // 감정 등록
    addRecordMutate(moodData, {
      onSuccess: () => {
        // location(cityName) 불러오기
        getProfile()
          .then((res) => {
            console.log(res);
            if (res.cityName) {
              setMoodData((prev) => ({
                ...prev,
                location: res.cityName,
              }));
            }
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
          });
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
        onClick={saveRecordHandler}
        disabled={isPending}
      />
      {isError && <ErrorMsg errorMessage={error.message} />}
    </div>
  );
}
