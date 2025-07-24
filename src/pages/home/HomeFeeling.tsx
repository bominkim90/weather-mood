export default function HomeFeeling() {
  return (
    <div className="HomeFeeling flex flex-col justify-center items-center gap-4">
      <div className="flex items-center justify-center box-white w-[128px] h-[128px] rounded-full">
        <img
          className="block w-[50px] h-[48px]"
          src={'/icons/emotion/emotion_3.svg'}
          alt={'그냥 쏘쏘'}
        />
      </div>
      <strong className="text-lg font-light">Feeling calm</strong>
      <p className="text-text-gray text-sm">How are you feeling today?</p>
    </div>
  );
}
