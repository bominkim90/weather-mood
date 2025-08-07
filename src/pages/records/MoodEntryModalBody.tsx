import Button from '@/components/button/Button';
import {
  useDeleteRecordQuery,
  useUpdateRecordQuery,
} from '@/hooks/useRecordQuery';
import { MoodRecord } from '@/model/record';
import { emotions } from '@/model/emotions';
import { useState } from 'react';

interface MoodEntryModalBodyProps {
  data: MoodRecord;
  handleCloseMoodModal: () => void;
}

export default function MoodEntryModalBody({
  data,
  handleCloseMoodModal,
}: MoodEntryModalBodyProps) {
  const { mutate: deleteRecordMutate } = useDeleteRecordQuery();
  const { mutate: updateRecordMutate } = useUpdateRecordQuery();

  // Edit 모드 상태 관리
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedEmotion, setEditedEmotion] = useState(data.id);
  const [editedNotes, setEditedNotes] = useState(data.memo);

  // 변경사항 감지
  const hasChanges = editedEmotion !== data.id || editedNotes !== data.memo;

  const onClickDelete = () => {
    console.log('Delete 버튼 클릭');
    deleteRecordMutate(data.id, {
      onSuccess: () => {
        console.log('삭제 성공');
        handleCloseMoodModal();
      },
      onError: () => {
        alert('삭제 실패');
      },
    });
  };

  const onClickEdit = () => {
    console.log('Edit 버튼 클릭');
    setIsEditMode(true);
  };

  const onClickCancel = () => {
    setIsEditMode(false);
    setEditedEmotion(data.id);
    setEditedNotes(data.memo);
  };

  const onClickSave = () => {
    if (hasChanges) {
      updateRecordMutate(
        {
          recordId: data.id,
          data: {
            feelingId: editedEmotion,
            memo: editedNotes,
          },
        },
        {
          onSuccess: () => {
            console.log('수정 성공');
            setIsEditMode(false);
            handleCloseMoodModal();
          },
          onError: () => {
            alert('수정 실패');
          },
        }
      );
    }
  };

  return (
    <div>
      <div className="contents space-y-3">
        <div className="flex flex-col items-center gap-2 mb-6">
          {isEditMode ? (
            // Edit 모드: 감정 선택 UI
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2 flex-wrap justify-center">
                {emotions.map((emotion) => (
                  <button
                    key={emotion.id}
                    onClick={() => setEditedEmotion(emotion.id)}
                    className={`w-[40px] h-[40px] rounded-full transition-all ${
                      editedEmotion === emotion.id
                        ? 'border-2 border-blue-500'
                        : 'border-2 border-transparent'
                    }`}
                  >
                    <img
                      className="w-full h-full"
                      src={emotion.icon}
                      alt={emotion.name}
                    />
                  </button>
                ))}
              </div>
              <strong className="text-lg font-medium">
                {emotions.find((e) => e.id === editedEmotion)?.name}
              </strong>
            </div>
          ) : (
            // View 모드: 기존 UI
            <>
              <img
                className="w-[40px] h-[40px]"
                src={`/icons/emotion/emotion_${data.id}.svg`}
                alt="mood"
              />
              <strong className="text-lg font-medium">{data.feeling}</strong>
            </>
          )}
          <p className="text-xs text-text-gray">{data.time}</p>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-gray-200">
          <p className="text-sm text-text-gray">Weather</p>
          <div className="flex items-center gap-2">
            <img className="w-[24px] h-[24px]" src={data.icon} alt="weather" />
            <p className="text-sm text-text-default">{data.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-gray-200">
          <p className="text-sm text-text-gray">Location</p>
          <div className="flex items-center gap-2">
            <img className="w-[24px] h-[24px]" src={data.icon} alt="weather" />
            {/* <p className="text-sm text-text-default">{data.cityName}</p> */}
          </div>
        </div>

        <div>
          <p className="text-sm text-text-gray py-2">Notes</p>
          {isEditMode ? (
            <input
              type="text"
              value={editedNotes}
              onChange={(e) => setEditedNotes(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your notes..."
            />
          ) : (
            <p className="text-sm text-text-default">{data.memo}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-8">
        {isEditMode ? (
          // Edit 모드: 취소/수정완료 버튼
          <>
            <Button
              theme="NEGATIVE"
              title="취소"
              addClass="flex-1"
              onClick={onClickCancel}
            />
            <Button
              theme="POSITIVE"
              title="수정완료"
              addClass="flex-1"
              onClick={onClickSave}
              disabled={!hasChanges}
            />
          </>
        ) : (
          // View 모드: Delete/Edit 버튼
          <>
            <Button
              theme="NEGATIVE"
              title="Delete"
              addClass="flex-1"
              onClick={onClickDelete}
            />
            <Button
              theme="POSITIVE"
              title="Edit"
              addClass="flex-1"
              onClick={onClickEdit}
            />
          </>
        )}
      </div>
    </div>
  );
}
