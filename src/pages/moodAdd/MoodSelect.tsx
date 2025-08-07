import { AddMoodData } from '@/model/addMoodData';
import { emotions } from '@/model/emotions';
import { useState } from 'react';

interface MoodSelectProps {
  setMoodData: React.Dispatch<React.SetStateAction<AddMoodData>>;
}

export default function MoodSelect({ setMoodData }: MoodSelectProps) {
  const [selectedMood, setSelectedMood] = useState<number>(0);

  const activeClass =
    'shadow-lg ring-5 ring-pink-primary ring-offset-0 scale-110 transition-all duration-300';

  const selectMoodFn = (id: number) => {
    setSelectedMood(id);
    setMoodData((prev) => ({ ...prev, feelingId: id }));
  };

  return (
    <div className="grid grid-cols-3 gap-4 place-items-center p-8">
      {emotions.map((item) => (
        <button
          style={{
            background: `url(${item.icon}) center/100% 100% no-repeat`,
          }}
          key={item.id}
          className={`w-[48px] h-[48px] rounded-full block ${selectedMood === item.id ? activeClass : ''}`}
          onClick={() => selectMoodFn(item.id)}
        >
          <span className="sr-only">{item.name}</span>
        </button>
      ))}
    </div>
  );
}
