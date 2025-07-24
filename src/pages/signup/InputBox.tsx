interface InputBoxProps {
  id: string;
  title: string;
  inputType: string;
  placeholder: string;
}

export default function InputBox({
  id,
  title,
  inputType,
  placeholder,
}: InputBoxProps) {
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
      />
    </div>
  );
}
