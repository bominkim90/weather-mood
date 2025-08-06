import BackButton from '@/components/button/BackButton';
import Header from '@/components/layout/Header';
import Chart from './Chart';
// import Summary from './Summary';
import Calendar from './Calendar';
import Entries from './Entries';

export default function RecordsIndex() {
  return (
    <>
      <Header left={<BackButton />} title="Records" />
      <div className="space-y-6">
        <Chart />
        {/* 추후 도입 가능 <Summary /> */}
        <Calendar />
        <Entries />
      </div>
    </>
  );
}
