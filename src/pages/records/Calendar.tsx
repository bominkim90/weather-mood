import { useDateRangeStore } from '@/store/useDateRangeStore';
import {
  DayPicker,
  getDefaultClassNames,
  OnSelectHandler,
} from 'react-day-picker';
import 'react-day-picker/style.css';
import { DateRange } from 'react-day-picker';
import './Calendar.css';
import formatDate from '@/util/formatDate';

export default function Calendar() {
  const { dateRange, setDateRange } = useDateRangeStore();
  const defaultClassNames = getDefaultClassNames();

  const handleSelect: OnSelectHandler<DateRange | undefined> = (
    selected,
    triggerDate,
    modifiers,
    e
  ) => {
    console.log('Selected : ', selected);
    console.log('Triggered by : ', triggerDate);
    console.log('Modifiers : ', modifiers);
    console.log('Event : ', e);

    setDateRange(selected ?? { from: undefined, to: undefined });
  };

  return (
    <div>
      <DayPicker
        // showOutsideDays
        mode="range"
        selected={dateRange}
        onSelect={handleSelect}
        // captionLayout="dropdown"
        footer={
          <div className="text-xs text-text-gray">
            {dateRange.from && dateRange.to
              ? `${formatDate(dateRange.from)} ~ ${formatDate(dateRange.to)}`
              : ''}
          </div>
        }
        classNames={{
          root: `${defaultClassNames.root} w-full text-xs`,
          month_caption: `${defaultClassNames.month_caption} mb-2`,
          nav: `${defaultClassNames.nav} gap-2`,
          month: `${defaultClassNames.month} w-full`,
          weekdays: `${defaultClassNames.weekdays} text-[13px]`,
          week: `${defaultClassNames.week} text-[13px]`,
          day: `${defaultClassNames.day} py-1 text-center`,
        }}
      />
    </div>
  );
}
