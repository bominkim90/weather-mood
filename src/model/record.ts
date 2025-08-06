export interface RecordsStatus {
  eachEmotionCount: {
    [key: string]: number;
  };
  list: Record[];
}

export interface Record {
  main: string;
  cityName: string;
  feelings: {
    name: string;
    id: number;
  };
  memo: string;
  createdAt: string;
}
