import InputBox from './InputBox';

export default function SignupMain() {
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
          <InputBox
            title="Email"
            inputType="text"
            id="email"
            placeholder="Enter your email"
          />

          <InputBox
            title="Username"
            inputType="text"
            id="username"
            placeholder="Choose a username"
          />

          <InputBox
            title="Password"
            inputType="password"
            id="password"
            placeholder="Create a password"
          />

          <InputBox
            title="Confirm Password"
            inputType="password"
            id="passwordConfirm"
            placeholder="Confirm your Password"
          />
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
