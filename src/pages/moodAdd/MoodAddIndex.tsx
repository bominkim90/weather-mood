import BackButton from '@/components/button/BackButton';
import Header from '@/components/layout/Header';
import MoodAddMain from './MoodAddMain';

export default function MoodAddIndex() {
  return (
    <div>
      <Header left={<BackButton />} title="How are you feeling?" />
      <MoodAddMain />
    </div>
  );
}
