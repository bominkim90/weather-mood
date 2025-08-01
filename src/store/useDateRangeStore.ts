import { create } from 'zustand';
import { DateRange } from 'react-day-picker';

interface DateRangeState {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
}

export const useDateRangeStore = create<DateRangeState>((set) => ({
  dateRange: {
    from: new Date(),
    to: new Date(),
  },
  setDateRange: (dateRange) => set({ dateRange: dateRange }),
}));
