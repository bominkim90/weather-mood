import Modal from '@/components/modal/Modal';
import { useGetRecordsQuery } from '@/hooks/useRecordQuery';
import { useDateRangeStore } from '@/store/useDateRangeStore';
import { useState } from 'react';
import MoodEntryModalBody from './MoodEntryModalBody';
import formatDate from '@/util/formatDate';
import Text from '@/components/text/Text';

export default function Entries() {
  const { dateRange } = useDateRangeStore();
  const [showMoodEntry, setShowMoodEntry] = useState(false);
  const [clickedModalNumber, setClickedModalNumber] = useState(-1);
  const {
    data: records,
    isFetching,
    isLoading,
    isError,
    error,
  } = useGetRecordsQuery(
    formatDate(dateRange.from ?? new Date()),
    formatDate(dateRange.to ?? new Date())
  );

  if (isLoading) return <Text text="Loading..." />;
  if (isError) return <Text text={error.message} />;
  if (!records || records.entries.length === 0)
    return <Text text="No entries found" />;
  if (isFetching) return <Text text="데이터 갱신 중..." />;

  const handleShowMoodEntry = (index: number) => {
    setShowMoodEntry(true);
    setClickedModalNumber(index);
  };

  const handleCloseMoodModal = () => {
    setShowMoodEntry(false);
    setClickedModalNumber(-1);
  };

  const entries = records.entries;
  console.log('entries : ', entries);

  return (
    <>
      <div className="space-y-3">
        {entries.map((entry, index) => (
          <div
            className="EntryItem box-white md"
            key={index}
            onClick={() => handleShowMoodEntry(index)}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[40px] h-[40px]"
                  src={`/icons/emotion/emotion_${entry.feelingId}.svg`}
                  alt="mood"
                />
                <div>
                  <p className="text-sm font-medium mb-[2px]">
                    {entry.feeling}
                  </p>
                  <p className="text-xs text-text-gray">{entry.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px] h-[24px]"
                  src={entry.icon}
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
          </div>
        ))}
      </div>
      {/* 감정 상세 modal */}
      {showMoodEntry && clickedModalNumber !== -1 && (
        <Modal title="Mood Entry" onClose={handleCloseMoodModal}>
          <MoodEntryModalBody
            data={entries[clickedModalNumber]}
            handleCloseMoodModal={handleCloseMoodModal}
          />
        </Modal>
      )}
    </>
  );
}
