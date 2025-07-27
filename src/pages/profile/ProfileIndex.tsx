import BackButton from '@/components/button/BackButton';
import Header from '@/components/layout/Header';
import ProfileMain from './ProfileMain';

export default function ProfileIndex() {
  return (
    <div>
      <Header left={<BackButton />} title="Profile" />
      <ProfileMain />
    </div>
  );
}
