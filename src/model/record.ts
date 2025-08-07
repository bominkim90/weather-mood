export interface MoodRecordsStatus {
  totalEntries: number;
  mostFrequentFeeling: string;
  feelingCounts: Record<string, number>[];
  entries: MoodRecord[];
}

export interface MoodRecord {
  date: string;
  description: string;
  feeling: string;
  feelsLike: number;
  icon: string;
  id: number;
  main: string;
  memo: string;
  temperature: number;
  time: string;
}
