import { create } from 'zustand';

interface DateRangeState {
  startDate: Date;
  endDate: Date;
}

export const useDateRangeStore = create<DateRangeState>((set) => {
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // getTime은 ms 단위

  return {
    startDate: sevenDaysAgo,
    endDate: today,
  };
});
