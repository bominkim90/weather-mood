import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '@/components/form/InputBox';
import Button from '@/components/button/Button';
import { Location, Signup } from '@/model/signup';
import InputSearchLocation from './InputSearchLocation';
import useSignup from '@/hooks/useSignup';

interface CustomFormData {
  [key: string]: string | object;
}

export default function SignupMain() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CustomFormData>({
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
    for (const [key, value] of Object.entries(formData)) {
      if (key === 'location') {
        const locationValue = value as Location;
        if (!locationValue.cityName.trim()) {
          setValidationError('Please select a location.');
          return false;
        }
      } else {
        if (typeof value === 'string' && !value.trim()) {
          setValidationError('Please fill in all fields.');
          return false;
        }
      }
    }

    // 비밀번호 확인
    if (
      (formData.password as string) !== (formData.confirmPassword as string)
    ) {
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

    const signupData: Signup = {
      email: formData.email as string,
      username: formData.username as string,
      password: formData.password as string,
      confirmPassword: formData.confirmPassword as string,
      location: formData.location as Location,
    };

    signupMutate(signupData, {
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
          <InputBox
            id="email"
            title="Email"
            inputType="text"
            placeholder="Enter your email"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />

          <InputBox
            id="username"
            title="Username"
            inputType="text"
            placeholder="Choose a username"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />

          <InputBox
            id="password"
            title="Password"
            inputType="password"
            placeholder="Create a password"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />

          <InputBox
            id="confirmPassword"
            title="Confirm Password"
            inputType="password"
            placeholder="Confirm your Password"
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
          <div className="text-red-primary mt-2">{error.message}</div>
        )}
        {validationError && (
          <div className="text-red-primary mt-2">{validationError}</div>
        )}
      </form>
    </div>
  );
}
