import { useState } from 'react';

interface EmotionData {
  mood: number;
  memo: string;
  date: string;
}
interface MoodMemoProps {
  setEmotionData: React.Dispatch<React.SetStateAction<EmotionData>>;
}

export default function MoodMemo({ setEmotionData }: MoodMemoProps) {
  const [text, setText] = useState<string>('');
  const TEXT_LIMIT = 100;

  const onChangeHandler = (value: string) => {
    if (value.length > TEXT_LIMIT) return;
    setText(value);
    setEmotionData((prev) => ({ ...prev, memo: value }));
  };

  return (
    <div className="py-8 text-right">
      <textarea
        className="w-full min-h-[116px] box-white rounded-xl p-4"
        placeholder="Write how you're feeling today..."
        value={text}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <div className="inline-block text-text-gray">
        <span>{text.length}</span>/<span>{TEXT_LIMIT}</span>
      </div>
    </div>
  );
}
