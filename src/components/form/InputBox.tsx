import { useState } from 'react';

interface InputBoxProps<T> {
  id: string;
  title: string;
  inputType: string;
  placeholder: string;
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  clearErrors: () => void;
}

export default function InputBox<T>({
  id,
  title,
  inputType,
  placeholder,
  formData,
  setFormData,
  clearErrors,
}: InputBoxProps<T>) {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (value: string) => {
    setValue(value);
    setFormData({ ...formData, [id]: value });
    clearErrors(); // 타이핑할 때 에러 초기화
  };

  return (
    <div className="input-box">
      <label htmlFor={id} className="text-sm text-text-secondary">
        {title}
      </label>
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className="mt-2 block box-white w-full sm text-sm"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={value}
      />
    </div>
  );
}
