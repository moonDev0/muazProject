
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useUserStore = create(
  persist(
  devtools((set) => ({
    user: null,
    saveuser: (user) => set({ user }),
  })),
  {
    name: 'userstore',
  }
)
);

export default useUserStore;