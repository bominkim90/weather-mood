import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserLocationState {
  locationStore: string;
  setLocationStore: (location: string) => void;
}

// 기본 create만 사용하는 방식 (현재 문제 발생하는 방식)
// export const useUserLocationStore = create<UserLocationState>((set) => ({
//   locationStore: '',
//   setLocationStore: (locationStore: string) => set({ locationStore }),
// }));

// persist 미들웨어 사용 방식 (권장 - 자동으로 localStorage 저장/복원)
// 이 방식을 사용하면 페이지 새로고침이나 네비게이션 시에도 데이터가 유지됨
export const useUserLocationStore = create<UserLocationState>()(
  persist(
    (set) => ({
      locationStore: '',
      setLocationStore: (locationStore: string) => set({ locationStore }),
    }),
    {
      name: 'user-location-storage', // localStorage 키 이름
    }
  )
);
