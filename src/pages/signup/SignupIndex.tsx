import BackButton from '@/components/button/BackButton';
import HeaderIndex from '@/components/header/Header';

export default function SignupIndex() {
  return (
    <div>
      <HeaderIndex left={<BackButton />} title="Sign Up" />
    </div>
  );
}
