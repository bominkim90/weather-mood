import { useState } from 'react';
import InputBox from './InputBox';
import { Location, Signup } from '@/model/signup';
import InputSearchLocation from './InputSearchLocation';
import useSignup from '@/hooks/useSignup';
import { useNavigate } from 'react-router-dom';

interface InputList {
  title: string;
  inputType: string;
  id: keyof Signup;
  placeholder: string;
  isCustom?: boolean;
}

const inputList: InputList[] = [
  {
    title: 'Email',
    inputType: 'text',
    id: 'email',
    placeholder: 'Enter your email',
  },
  {
    title: 'Username',
    inputType: 'text',
    id: 'username',
    placeholder: 'Choose a username',
  },
  {
    title: 'Password',
    inputType: 'password',
    id: 'password',
    placeholder: 'Create a password',
  },
  {
    title: 'Confirm Password',
    inputType: 'password',
    id: 'confirmPassword',
    placeholder: 'Confirm your Password',
  },
  {
    title: 'Location',
    inputType: 'text',
    id: 'location',
    placeholder: 'Enter your location',
    isCustom: true,
  },
];

export default function SignupMain() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Signup>({
    confirmPassword: '',
    email: '',
    password: '',
    username: '',
    location: {
      longitude: 0,
      latitude: 0,
      cityName: '',
    },
  });
  const { mutate, isError, error } = useSignup();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  // 회원가입 시도
  const onSubmit = () => {
    setIsEmpty(false);

    for (const [key, value] of Object.entries(formData)) {
      if (key === 'location') {
        const locationValue = value as Location;
        if (!locationValue.cityName.trim()) {
          setIsEmpty(true);
          return;
        }
      } else {
        if (typeof value === 'string' && !value.trim()) {
          setIsEmpty(true);
          return;
        }
      }
    }

    mutate(formData, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (err) => {
        console.error('회원가입 실패:', err);
      },
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="input-list space-y-6">
          {inputList.map((item) => {
            if (item.isCustom && item.id === 'location') {
              return (
                <InputSearchLocation
                  key={item.id}
                  formData={formData}
                  setFormData={setFormData}
                />
              );
            }

            return (
              <InputBox
                key={item.id}
                title={item.title}
                inputType={item.inputType}
                id={item.id as keyof Signup}
                placeholder={item.placeholder}
                formData={formData}
                setFormData={setFormData}
              />
            );
          })}
        </div>

        <button
          type="submit"
          className="mt-[32px] flex w-full h-[45px] justify-center items-center rounded-[20px] bg-main-pink text-white text-sm"
        >
          Sign Up
        </button>
        {(isError || isEmpty) && (
          <p className="text-red-500 mt-3">{error?.message}</p>
        )}
      </form>
    </div>
  );
}
