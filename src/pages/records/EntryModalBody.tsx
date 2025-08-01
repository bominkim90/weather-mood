import Button from '@/components/button/Button';
import { Record } from '@/model/record';

interface MoodEntryModalBodyProps {
  data: Record;
}

export default function MoodEntryModalBody({ data }: MoodEntryModalBodyProps) {
  return (
    <div>
      <div className="contents space-y-3">
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-[40px] h-[40px]"
            src={`/icons/emotion/${data.emotionId}.svg`}
            alt="mood"
          />
          <strong className="text-lg font-medium">{data.emotionName}</strong>
          <p className="text-xs text-text-gray">{data.createdAt}</p>
        </div>

        <div className="flex justify-between items-center py-1 border-b border-gray-200">
          <p className="text-sm text-text-gray">Weather</p>
          <div className="flex items-center gap-2">
            <img
              className="w-[24px] h-[24px]"
              src={`/icons/weather/${data.weatherIcon}.svg`}
              alt="weather"
            />
            <p className="text-sm text-text-default">{data.weatherName}</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-1 border-b border-gray-200">
          <p className="text-sm text-text-gray">Location</p>
          <div className="flex items-center gap-2">
            <img
              className="w-[24px] h-[24px]"
              src={`/icons/weather/${data.weatherIcon}.svg`}
              alt="weather"
            />
            <p className="text-sm text-text-default">{data.location}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-text-gray py-2">Notes</p>
          <p className="text-sm text-text-default">{data.memo}</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-8">
        <Button theme="NEGATIVE" title="Delete" addClass="flex-1" />
        <Button theme="POSITIVE" title="Edit" addClass="flex-1" />
      </div>
    </div>
  );
}
