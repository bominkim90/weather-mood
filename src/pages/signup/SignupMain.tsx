import { useState } from 'react';
import InputBox from './InputBox';
import { Location, Signup } from '@/model/signup';
import InputSearchLocation from './InputSearchLocation';

const inputList = [
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
    inputType: 'text',
    id: 'password',
    placeholder: 'Create a password',
  },
  {
    title: 'Confirm Password',
    inputType: 'password',
    id: 'confirmPassword',
    placeholder: 'Confirm your Password',
  },
];

export default function SignupMain() {
  const [formData, setFormData] = useState<Partial<Signup>>({});
  const [location, setLocation] = useState<Location>({
    longitude: null,
    latitude: null,
  });
  const onSubmit = () => {
    console.log('회원가입 시도');
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
          {inputList.map((item, index) => (
            <InputBox
              key={index}
              title={item.title}
              inputType={item.inputType}
              id={item.id as keyof Signup}
              placeholder={item.placeholder}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
          <InputSearchLocation location={location} setLocation={setLocation} />
        </div>

        <button
          type="submit"
          className="mt-[32px] flex w-full h-[45px] justify-center items-center rounded-[20px] bg-main-pink text-white text-sm"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
