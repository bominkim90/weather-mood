import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import InputBox from '@/components/form/InputBox';
import { Signup } from '@/model/signup';
import InputSearchLocation from './InputSearchLocation';
import useSignup from '@/hooks/useSignupQuery';
import ErrorMsg from '@/components/error/ErrorMsg';

export default function SignupMain() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Signup>({
    email: '',
    nickName: '',
    password: '',
    confirm_password: '',
    cityName: '',
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
      !formData.nickName.trim() ||
      !formData.password.trim() ||
      !formData.confirm_password.trim() ||
      !formData.cityName.trim()
    ) {
      setValidationError('Please fill in all fields.');
      return false;
    }

    // 비밀번호 확인
    if (formData.password !== formData.confirm_password) {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <InputBox<Signup>
            id="email"
            title="Email"
            inputType="text"
            placeholder="Enter your email"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />

          <InputBox<Signup>
            id="nickName"
            title="Nickname"
            inputType="text"
            placeholder="Choose a nickname"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />

          <InputBox<Signup>
            id="password"
            title="Password"
            inputType="password"
            placeholder="Create a password"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />

          <InputBox<Signup>
            id="confirm_password"
            title="Confirm Password"
            inputType="password"
            placeholder="Confirm your password"
            formData={formData}
            setFormData={setFormData}
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
