import { Link } from 'react-router-dom';

export default function Records() {
  return (
    <div>
      <h1>Records</h1>
      <p>기록 페이지입니다.</p>
      <nav>
        <Link to="/">홈으로 돌아가기</Link>
      </nav>
    </div>
  );
} 