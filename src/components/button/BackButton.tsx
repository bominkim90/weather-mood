import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="block w-[32px] h-[32px] cursor-pointer"
      style={{ background: 'url(/icons/backButton.svg) center/100% no-repeat' }}
      onClick={() => navigate(-1)}
    >
      <span className="sr-only">뒤로가기 버튼</span>
    </button>
  );
}
