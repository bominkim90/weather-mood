import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserLocationState {
  locationStore: string;
  setLocationStore: (location: string) => void;
}

// export const useUserLocationStore = create<UserLocationState>((set) => ({
//   locationStore: '',
//   setLocationStore: (locationStore: string) => set({ locationStore }),
// }));

export const useUserLocationStore = create<UserLocationState>()(
  persist(
    (set) => ({
      locationStore: '',
      setLocationStore: (locationStore: string) => set({ locationStore }),
    }),
    {
      name: 'user-location-storage',
    }
  )
);
