import PlusButton from '@/components/button/PlusButton';
import HomeFeeling from './HomeFeeling';
import HomeWeather from './HomeWeather';

export default function Home() {
  return (
    <>
      <div className="Home space-y-12">
        {/* 날씨 정보 */}
        <HomeWeather />

        {/* 기분 정보 */}
        <HomeFeeling />

        {/* 기분 통계 */}
        <section>
          일주일 기분 통계? <br />
          여기 뭔가 추가하면 좋을거같은데..
        </section>
      </div>
      <div className="fixed bottom-[76px] right-[16px]">
        <PlusButton />
      </div>
    </>
  );
}
