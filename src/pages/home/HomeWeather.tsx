import useTodayMood from '@/hooks/useTodayMoodQuery';
import getTodayDate from '@/util/getTodayDate';

export default function HomeWeather() {
  const {
    data: todayMoodData,
    isPending,
    isError,
    error,
  } = useTodayMood(getTodayDate());

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="HomeWeather box-white lg">
      <div className="flex justify-between items-center">
        <strong className="text-lg font-bold">
          {todayMoodData?.location.location}
        </strong>
        <span className="text-sm text-text-gray">{getTodayDate()}</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-light">
            <span>30</span>°C
          </p>
          <span className="text-sm text-text-gray">
            {todayMoodData?.weather.description}
          </span>
        </div>
        <div>
          <img
            className="block w-[25px] h-[24px]"
            src={todayMoodData?.weather.icon}
            alt={todayMoodData?.weather.description}
          />
        </div>
      </div>
    </div>
  );
}
