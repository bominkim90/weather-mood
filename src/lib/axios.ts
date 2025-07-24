import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 이 설정 있어야 => 쿠키가 자동으로 포함됨
});

// 공통 요청 헤더 (토큰 자동 추가)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// 공통 응답 처리 (토큰 만료, 에러 메시지 처리)
axiosInstance.interceptors.response.use(
  // 정상 응답 시 실행되는 콜백
  // 받은 응답을 그대로 반환 : 여기서 응답을 가공해서 반환하거나 할 수 있음
  (response) => response,

  // 에러 발생 시 실행되는 콜백
  // HTTP 에러 또는 네트워크 에러 등 모든 axios 에러 처리
  (error) => {
    if (error.response) {
      // HTTP에러가 아닌, 네트워크 에러라면 error.response가 없을 수 있음
      const { status } = error.response;
      if (status === 401) {
        // jwt 만료 or 로그인 안 함 => 로그인 페이지로 이동
        window.location.href = '/login';
        console.log('로그인이 필요합니다.');
      } else if (status === 500) {
        console.error('서버 오류 발생');
      }
    }
    return Promise.reject(error); // 즉시 '실패' 상태의 Promise를 반환 => 사용한곳에서 .catch() 등으로 처리 가능
  }
);

export default axiosInstance;
