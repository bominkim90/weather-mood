import Text from '@/components/text/Text';
import { useGetRecordsQuery } from '@/hooks/useRecordQuery';
import { emotions } from '@/model/emotions';
import formatDate from '@/util/formatDate';

export default function HomeSummary() {
  // 주간 기분 데이터
  const aWeekAgo = new Date(new Date().setDate(new Date().getDate() - 7));
  const today = new Date();
  const {
    data: moodData,
    isLoading: isMoodLoading,
    isError: isMoodError,
    error: moodError,
  } = useGetRecordsQuery(formatDate(aWeekAgo), formatDate(today));

  if (isMoodLoading) return <Text text="Loading..." />;
  if (isMoodError) return <Text text={moodError.message} />;
  if (!moodData || moodData.totalEntries === 0) return <Text text="No data" />;

  return (
    <div className="HomeSummary box-white lg">
      <h2 className="text-sm pb-2 mb-2">Weekly Mood</h2>
      {/* <p>Most Frequent Feeling: {moodData.mostFrequentFeeling}</p> */}
      <div className="flex items-center gap-3 flex-wrap">
        {Object.entries(moodData.feelingCounts).map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <img
                className="w-8 h-8 inline-block"
                src={emotions.find((emotion) => emotion.name === item[0])?.icon}
              />
              <span className="text-sm text-text-secondary">
                {String(item[1])}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
