import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Link } from 'react-router-dom';
import Button from '@/components/button/Button';
import InputBox from '@/components/form/InputBox';
import useLogin from '@/hooks/useLoginQuery';
import ErrorMsg from '@/components/error/ErrorMsg';
import { useUserLocationStore } from '@/store/useUserLocationStore';
import getProfile from '@/api/profile';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginIndex() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  // 위치정보 스토어
  const { setLocation } = useUserLocationStore();

  // 프로필 api 성공여부
  const [isProfileError, setIsProfileError] = useState<boolean>(false);
  const [profileError, setProfileError] = useState<string | null>(null);

  // 로그인 api 결과값
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
        // 백엔드에서 받은 헤더 Authorization 토큰 -> localStorage에 저장
        localStorage.setItem('accessToken', loginResult.accessToken);

        // location 정보 api 호출
        getProfile()
          .then((profileData) => {
            // location 스토어 저장
            console.log('profileData : ', profileData);
            console.log('profileData.cityName : ', profileData.cityName);
            setLocation(profileData.cityName);
            navigate('/');
          })
          .catch((error) => {
            setIsProfileError(true);
            setProfileError(error.message);
          });
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
          <InputBox<LoginData>
            id="email"
            title="Email"
            inputType="text"
            placeholder="Enter your email"
            clearErrors={clearErrors}
            formData={formData}
            setFormData={setFormData}
          />

          <InputBox<LoginData>
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

        {/* 로그인 에러 메시지 표시 */}
        {isError && error && <ErrorMsg errorMessage={error.message} />}
        {validationError && <ErrorMsg errorMessage={validationError} />}

        {/* 위치정보 에러 메시지 표시 */}
        {isProfileError && profileError && (
          <ErrorMsg errorMessage={profileError} />
        )}
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
