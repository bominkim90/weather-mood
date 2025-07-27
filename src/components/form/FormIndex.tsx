import { useState } from 'react';
import InputBox from './InputBox';
import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';

interface CustomFormData {
  [key: string]: string | object;
}

interface FormHook {
  mutate: (
    data: CustomFormData,
    options: {
      onSuccess: () => void;
      onError: (error: Error) => void;
    }
  ) => void;
  isError: boolean;
  error: Error | null;
  reset: () => void;
}

interface CustomComponentProps {
  formData: CustomFormData;
  setFormData: React.Dispatch<React.SetStateAction<CustomFormData>>;
  clearErrors: () => void;
}

interface FormList {
  id: string;
  type: string;
  title: string;
  placeholder: string;
  isCustom?: boolean;
  customComponent?: React.ComponentType<CustomComponentProps>;
}

interface FormIndexProps {
  title: string;
  formList: FormList[];
  formHook: () => FormHook;
  onSuccessUrl: string;
  initialData?: CustomFormData;
  customValidation?: (data: CustomFormData) => string | null;
}

export default function FormIndex({
  title,
  formList,
  formHook,
  onSuccessUrl,
  initialData = {},
  customValidation,
}: FormIndexProps) {
  const navigate = useNavigate();
  const formIds = formList.map((form) => form.id);
  const [formData, setFormData] = useState<CustomFormData>(() => {
    const defaultData = formIds.reduce(
      (acc, id) => ({ ...acc, [id]: '' }),
      {} as CustomFormData
    );
    return { ...defaultData, ...initialData };
  });
  const { mutate, isError, error, reset } = formHook();
  const [validationError, setValidationError] = useState<string | null>(null);

  // 모든 에러 초기화 함수
  const clearErrors = () => {
    setValidationError(null);
    if (isError) {
      reset(); // React Query mutation 에러 초기화
    }
  };

  const onSubmitHandler = () => {
    setValidationError(null);

    // 커스텀 유효성 검사
    if (customValidation) {
      const validationResult = customValidation(formData);
      if (validationResult) {
        setValidationError(validationResult);
        return;
      }
    }

    mutate(formData as CustomFormData, {
      onSuccess: () => {
        navigate(onSuccessUrl);
      },
      onError: (error: Error) => {
        console.log(error);
      },
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="space-y-4">
        {formList.map((form) => {
          // 커스텀 컴포넌트가 있는 경우
          if (form.isCustom && form.customComponent) {
            const CustomComponent = form.customComponent;
            return (
              <CustomComponent
                key={form.id}
                formData={formData}
                setFormData={setFormData}
                clearErrors={clearErrors}
              />
            );
          }

          // 기본 InputBox 사용
          return (
            <InputBox
              key={form.id}
              id={form.id}
              title={form.title}
              inputType={form.type}
              placeholder={form.placeholder}
              formData={formData}
              setFormData={setFormData}
              clearErrors={clearErrors}
            />
          );
        })}
      </div>
      <Button
        theme="POSITIVE"
        type="submit"
        addClass="mt-6 w-full rounded-full"
        title={title}
        onClick={onSubmitHandler}
      />

      {/* 에러 메시지 표시 */}
      {isError && error && (
        <div className="text-red-primary mt-2">{error.message}</div>
      )}
      {validationError && (
        <div className="text-red-primary mt-2">{validationError}</div>
      )}
    </form>
  );
}
