export default function HomeWeather() {
  return (
    <div className="HomeWeather box-white lg">
      <div className="flex justify-between items-center">
        <strong className="text-lg font-bold">Seoul, South Korea</strong>
        <span className="text-sm text-text-gray">July 21, 2025</span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-light">
            <span>30</span>°C
          </p>
          <span className="text-sm text-text-gray">Sunny</span>
        </div>
        <div>
          <img
            className="block w-[25px] h-[24px]"
            src={'/icons/weather/sunny.svg'}
            alt={'날씨 아이콘'}
          />
        </div>
      </div>
    </div>
  );
}
