import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';
import { useFetchRecords } from '@/hooks/useRecordQuery';
import { useDateRangeStore } from '@/store/useDateRangeStore';
import { useState } from 'react';
import MoodEntryModalBody from './EntryModalBody';

export default function Entries() {
  const { dateRange } = useDateRangeStore();
  const [showMoodEntry, setShowMoodEntry] = useState(false);
  const [clickedModalNumber, setClickedModalNumber] = useState(-1);
  // const {
  //   data: entries,
  //   isFetching,
  //   isLoading,
  //   isError,
  //   error,
  // } = useFetchRecords(
  //   formatDate(dateRange.from ?? new Date()),
  //   formatDate(dateRange.to ?? new Date())
  // );

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;
  // if (!entries || entries.list.length === 0) return <div>No entries found</div>;
  // if (isFetching) return <div>데이터 갱신 중...</div>;

  const handleShowMoodEntry = (index: number) => {
    console.log('showMoodEntry');
    setShowMoodEntry(true);
    setClickedModalNumber(index);
  };

  const handleCloseMoodModal = () => {
    setShowMoodEntry(false);
    setClickedModalNumber(-1);
  };

  // 가상 데이터
  const entriesData = {
    eachEmotionCount: {
      calm: 10,
      happy: 20,
      sad: 30,
    },
    list: [
      {
        emotionId: 1,
        emotionName: 'calm',
        weatherIcon: 'sunny',
        weatherName: 'sunny',
        location: 'Seoul, Korea',
        memo: 'Had a wonderful lunch with Sarah at the new cafe downtown. The weather was perfect and I felt so grateful for good friends.',
        createdAt: '2025-07-20 10:00',
      },
      {
        emotionId: 2,
        emotionName: 'happy',
        weatherIcon: 'sunny',
        weatherName: 'sunny',
        location: 'Seoul, Korea',
        memo: 'Had a wonderful lunch with Sarah at the new cafe downtown. The weather was perfect and I felt so grateful for good friends.',
        createdAt: '2025-07-20 10:00',
      },
      {
        emotionId: 3,
        emotionName: 'sad',
        weatherIcon: 'sunny',
        weatherName: 'sunny',
        location: 'Seoul, Korea',
        memo: 'Had a wonderful lunch with Sarah at the new cafe downtown. The weather was perfect and I felt so grateful for good friends.',
        createdAt: '2025-07-20 10:00',
      },
    ],
  };
  const entries = entriesData.list;

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Recent Entries</h2>

      {/* entry-list */}
      <div className="space-y-3">
        {/* entry-item */}
        {entries.map((entry, index) => (
          <div
            className="box-white md"
            key={index}
            onClick={() => handleShowMoodEntry(index)}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[40px] h-[40px]"
                  src={`/icons/emotion/${entry.emotionId}.svg`}
                  alt="mood"
                />
                <div>
                  <p className="text-sm font-medium">{entry.emotionName}</p>
                  <p className="text-xs text-text-gray">{entry.createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px] h-[24px]"
                  src={`/icons/weather/${entry.weatherIcon}.svg`}
                  alt="weather"
                />
                <img
                  className="w-[24px] h-[24px]"
                  src="/icons/arrow_gray_next.svg"
                  alt="arrow"
                />
              </div>
            </div>
            <div className="mt-3 text-sm text-text-gray-dark">{entry.memo}</div>

            {showMoodEntry && clickedModalNumber === index && (
              <Modal title="Mood Entry" onClose={handleCloseMoodModal}>
                <MoodEntryModalBody data={entry} />
              </Modal>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
