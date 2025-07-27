import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import InputBox from '@/components/form/InputBox';
import { Location, Signup } from '@/model/signup';
import InputSearchLocation from './InputSearchLocation';
import useSignup from '@/hooks/useSignup';
import ErrorMsg from '@/components/error/ErrorMsg';

export default function SignupMain() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Signup>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    location: {
      longitude: 0,
      latitude: 0,
      cityName: '',
    } as Location,
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  const {
    mutate: signupMutate,
    isError,
    error,
    reset,
    isPending,
  } = useSignup();

  // 에러 초기화 함수
  const clearErrors = () => {
    setValidationError(null);
    if (isError) {
      reset();
    }
  };

  // 폼 유효성 검사
  const validateForm = (): boolean => {
    // 빈 필드 체크
    if (
      !formData.email.trim() ||
      !formData.username.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim() ||
      !formData.location.cityName.trim()
    ) {
      setValidationError('Please fill in all fields.');
      return false;
    }

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match.');
      return false;
    }

    return true;
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    signupMutate(formData, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error: Error) => {
        console.log(error);
      },
    });
  };

  // InputBox와 호환을 위한 타입 변환
  const formDataForInputBox = formData as unknown as {
    [key: string]: string | object;
  };
  const setFormDataForInputBox = setFormData as unknown as React.Dispatch<
    React.SetStateAction<{ [key: string]: string | object }>
  >;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <InputBox
            id="email"
            title="Email"
            inputType="text"
            placeholder="Enter your email"
            formData={formDataForInputBox}
            setFormData={setFormDataForInputBox}
            clearErrors={clearErrors}
          />

          <InputBox
            id="username"
            title="Username"
            inputType="text"
            placeholder="Choose a username"
            formData={formDataForInputBox}
            setFormData={setFormDataForInputBox}
            clearErrors={clearErrors}
          />

          <InputBox
            id="password"
            title="Password"
            inputType="password"
            placeholder="Create a password"
            formData={formDataForInputBox}
            setFormData={setFormDataForInputBox}
            clearErrors={clearErrors}
          />

          <InputBox
            id="confirmPassword"
            title="Confirm Password"
            inputType="password"
            placeholder="Confirm your Password"
            formData={formDataForInputBox}
            setFormData={setFormDataForInputBox}
            clearErrors={clearErrors}
          />

          <InputSearchLocation
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />
        </div>

        <Button
          theme="POSITIVE"
          type="submit"
          addClass="mt-6 w-full rounded-full"
          title="Sign Up"
          disabled={isPending}
        />

        {/* 에러 메시지 표시 */}
        {isError && error && (
          <ErrorMsg errorMessage={error.message} addClass="mt-2" />
        )}
        {validationError && (
          <ErrorMsg errorMessage={validationError} addClass="mt-2" />
        )}
      </form>
    </div>
  );
}
