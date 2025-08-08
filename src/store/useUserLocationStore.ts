import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserLocationState {
  location: string;
  setLocation: (location: string) => void;
}

// export const useUserLocationStore = create<UserLocationState>((set) => ({
//   location: '',
//   setLocation: (location: string) => set({ location }),
// }));

export const useUserLocationStore = create<UserLocationState>()(
  persist(
    (set) => ({
      location: '',
      setLocation: (location: string) => set({ location }),
    }),
    {
      name: 'user-location-storage',
    }
  )
);
