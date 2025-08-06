import { useFetchRecords } from '@/hooks/useRecordQuery';
import { useDateRangeStore } from '@/store/useDateRangeStore';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import formatDate from '@/util/formatDate';
import { emotionLabels, emotions } from '@/model/emotions';
import dummyRecords from './DummyRecords';

export default function Chart() {
  // const { dateRange } = useDateRangeStore();
  // const { data: records, isError, error, isLoading } =
  //   useFetchRecords(
  //     formatDate(dateRange.from ?? new Date()),
  //     formatDate(dateRange.to ?? new Date())
  //   );

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  // 가상 데이터 => 나중에 삭제
  const records = dummyRecords;

  if (!records) return <div>No data</div>;

  const rawData = records.list.map((record) => ({
    date: record.createdAt.split('-')[2],
    emotionId: record.feelings.id,
    emotionName: record.feelings.name,
  }));

  const data = summarizeData(rawData);

  return (
    <div className="box-white lg">
      <h2 className="section-title mb-4">Mood Chart</h2>
      <ResponsiveContainer width="100%" height={192}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="emotionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-pink-primary)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-pink-primary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            // interval={Math.floor(data.length / 5)} // 몇 개마다 하나씩 보여줄지를 지정
            minTickGap={20} // 최소 간격 설정 (interval 과 함께 사용하면 무시됨) => interval 둘 중 하나 사용하면 됨
            tick={{ fontSize: 12, fill: 'var(--color-text-gray)' }}
            tickLine={false} // 눈금 짧은 선 제거
            axisLine={false} // x축 선 제거
            padding={{ left: 10, right: 10 }} // 좌우 여백
          />
          <YAxis
            domain={[1, emotions.length]}
            ticks={emotions.map(({ id }) => id)}
            tickFormatter={(val: number) => emotionLabels[val]}
            tick={{ fontSize: 12, fill: 'var(--color-text-gray)' }}
            tickLine={false} // 눈금 짧은 선 제거
            axisLine={false} // y축 선 제거
          />
          <CartesianGrid
            // strokeDasharray="3 3"
            stroke="#ededed"
            vertical={false}
          />
          <Tooltip
            formatter={(val: number) => emotionLabels[val]}
            labelFormatter={(label) => `날짜: ${label}`}
            cursor={{ stroke: 'var(--color-pink-primary)', strokeWidth: 2 }}
          />
          <Area
            type="monotone"
            dataKey="emotionId"
            stroke="var(--color-pink-primary)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#emotionGradient)"
            // activeDot={{ r: 2 }}
            dot={{ r: 2, fill: '#fff' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// 감정 ID 평균 계산
function getAverageEmotion(group: { emotionId: number }[]) {
  const sum = group.reduce((acc, cur) => acc + cur.emotionId, 0);
  return Math.round(sum / group.length);
}

// N개씩 잘라주는 함수
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// 30개 초과 시 요약
function summarizeData(
  data: {
    date: string;
    emotionId: number;
    emotionName: string;
  }[]
): {
  date: string;
  emotionId: number;
  emotionName: string;
}[] {
  const MAX_COUNT = 30;
  if (data.length <= MAX_COUNT) return data;

  const chunkSize = Math.ceil(data.length / MAX_COUNT);
  const grouped = chunkArray(data, chunkSize);

  return grouped.map((group) => ({
    date: group[0].date,
    emotionId: getAverageEmotion(group),
    emotionName: 'avg',
  }));
}
