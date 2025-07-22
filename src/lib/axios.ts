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
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       const { status } = error.response;
//       if (status === 401) {
//         // 예: 토큰 만료 → 로그아웃 처리
//         console.warn('로그인이 만료되었습니다.');
//         // 예: location.replace('/login') 또는 상태 초기화 등
//       } else if (status === 500) {
//         console.error('서버 오류 발생');
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
