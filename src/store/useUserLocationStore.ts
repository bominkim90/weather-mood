import { create } from 'zustand';

interface UserLocationState {
  location: string;
  setLocation: (location: string) => void;
}

export const useUserLocationStore = create<UserLocationState>((set) => ({
  location: '',
  setLocation: (location: string) => set({ location }),
}));
