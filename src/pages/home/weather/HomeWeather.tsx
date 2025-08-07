import Text from '@/components/text/Text';
import useTodayWeather from '@/hooks/useTodayWeatherQuery';
import getTodayDate from '@/util/getTodayDate';

export default function HomeWeather() {
  const {
    data: todayWeatherData,
    isPending,
    isError,
    error,
  } = useTodayWeather();

  if (isPending) return <Text text="Loading..." />;
  if (isError) return <Text text={error?.message} />;

  return (
    <div className="HomeWeather box-white lg">
      <div className="flex justify-between items-center">
        <strong className="text-lg font-bold">
          {todayWeatherData?.location.location}
        </strong>
        <span className="text-sm text-text-gray">{getTodayDate()}</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-light">
            <span>30</span>°C
          </p>
          <span className="text-sm text-text-gray">
            {todayWeatherData?.weather.description}
          </span>
        </div>
        <div>
          <img
            className="block w-[25px] h-[24px]"
            src={todayWeatherData?.weather.icon}
            alt={todayWeatherData?.weather.description}
          />
        </div>
      </div>
    </div>
  );
}
