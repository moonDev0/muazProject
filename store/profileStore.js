
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useProfileStore = create(
  persist(
  devtools((set) => ({
    profile: null,
    saveProfile: (profile) => set({ profile }),
  })),
  {
    name: 'ProfileStore',
  }
)
);

export default useProfileStore;