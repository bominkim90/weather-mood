interface CustomFormData {
  [key: string]: string | object;
}

interface InputBoxProps {
  id: string;
  title: string;
  inputType: string;
  placeholder: string;
  formData: CustomFormData;
  setFormData: React.Dispatch<React.SetStateAction<CustomFormData>>;
  clearErrors: () => void;
}

export default function InputBox({
  id,
  title,
  inputType,
  placeholder,
  formData,
  setFormData,
  clearErrors,
}: InputBoxProps) {
  const onChangeHandler = (value: string) => {
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
        value={formData[id] as string}
      />
    </div>
  );
}
