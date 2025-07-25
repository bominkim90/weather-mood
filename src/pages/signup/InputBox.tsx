import { Signup } from '@/model/signup';
import { useEffect } from 'react';

interface InputBoxProps {
  id: keyof Signup;
  title: string;
  inputType: string;
  placeholder: string;
  formData: Partial<Signup>;
  setFormData: React.Dispatch<React.SetStateAction<Signup>>;
}

export default function InputBox({
  id,
  title,
  inputType,
  placeholder,
  formData,
  setFormData,
}: InputBoxProps) {
  const onChangeHandler = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    console.log('formData : ', formData);
  }, [formData]);

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
        value={formData[id] as string}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}
