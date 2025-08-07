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
      <div className="space-y-10">
        <Chart />
        {/* 추후 도입 가능 <Summary /> */}
        <Calendar />
        <div>
          <h2 className="text-lg font-medium mb-4">Recent Entries</h2>
          <Entries />
        </div>
      </div>
    </>
  );
}
