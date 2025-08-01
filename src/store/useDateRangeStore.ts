import { create } from 'zustand';
import { DateRange } from 'react-day-picker';

interface DateRangeState {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
}

export const useDateRangeStore = create<DateRangeState>((set) => {
  const today = new Date();
  const aMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 1));

  return {
    dateRange: {
      from: aMonthAgo,
      to: today,
    },
    setDateRange: (dateRange) => set({ dateRange: dateRange }),
  };
});
