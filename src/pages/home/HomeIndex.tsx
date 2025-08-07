import HomeMoodIndex from './mood/HomeMoodIndex';
import HomeWeather from './weather/HomeWeather';
import HomeSummary from './summary/HomeSummary';

export default function HomeIndex() {
  return (
    <>
      <div className="Home space-y-12">
        {/* 날씨 정보 */}
        <HomeWeather />

        {/* 기분 정보 */}
        <HomeMoodIndex />

        {/* 기분 통계 */}
        <HomeSummary />
      </div>
    </>
  );
}
