export default function PlusButton() {
  return (
    <button
      style={{
        background:
          "#ffb6c1 url('/icons/plus_white.svg') center/25px 24px no-repeat",
      }}
      className="block w-[56px] h-[56px] rounded-full shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
    >
      <span className="sr-only">감정 일기 작성하기</span>
    </button>
  );
}
