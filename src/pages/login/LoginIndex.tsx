import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Link } from 'react-router-dom';
import Button from '@/components/button/Button';
import InputBox from '@/components/form/InputBox';
import useLogin from '@/hooks/useLoginQuery';
import ErrorMsg from '@/components/error/ErrorMsg';

interface CustomFormData {
  [key: string]: string | object;
}

interface LoginData {
  email: string;
  password: string;
}

export default function LoginIndex() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CustomFormData>({
    email: '',
    password: '',
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  const { mutate: loginMutate, isError, error, reset, isPending } = useLogin();

  // 에러 초기화 함수
  const clearErrors = () => {
    setValidationError(null);
    if (isError) {
      reset();
    }
  };

  // 폼 유효성 검사
  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setValidationError('Please fill in all fields.');
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

    const loginData: LoginData = {
      email: formData.email as string,
      password: formData.password as string,
    };

    loginMutate(loginData, {
      onSuccess: (loginResult) => {
        console.log('loginResult : ', loginResult);
        // 백엔드에서 받은 헤더 Authorization 토큰 -> localStorage에 저장
        localStorage.setItem('accessToken', loginResult.accessToken);
        navigate('/');
      },
      onError: (error: Error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <Header title="Login" />
      <form onSubmit={handleSubmit} className="py-8">
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
            id="password"
            title="Password"
            inputType="password"
            placeholder="Enter your password"
            formData={formData}
            setFormData={setFormData}
            clearErrors={clearErrors}
          />
        </div>

        <Button
          theme="POSITIVE"
          type="submit"
          addClass="mt-6 w-full rounded-full"
          title="Login"
          disabled={isPending}
        />

        {/* 에러 메시지 표시 */}
        {isError && error && <ErrorMsg errorMessage={error.message} />}
        {validationError && <ErrorMsg errorMessage={validationError} />}
      </form>

      <div className="text-center text-text-secondary mt-4">
        Don&apos;t have an account?{' '}
        <Link to="/signup">
          <span className="text-pink-primary underline underline-offset-2">
            Sign up
          </span>
        </Link>
      </div>
    </div>
  );
}
