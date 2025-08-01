export interface RecordsStatus {
  eachEmotionCount: {
    [key: string]: number;
  };
  list: Record[];
}

export interface Record {
  emotionId: number;
  emotionName: string;
  weatherIcon: string;
  weatherName: string;
  location: string;
  memo: string;
  createdAt: string;
}
