import BackButton from '@/components/button/BackButton';
import HeaderIndex from '@/components/layout/Header';
import SignupMain from './SignupMain';

export default function SignupIndex() {
  return (
    <div className="pt-[32px]">
      <HeaderIndex left={<BackButton />} title="Sign Up" />
      <SignupMain />
    </div>
  );
}
