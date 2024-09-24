
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useCurrentCertStore = create(
  persist(
  devtools((set) => ({
    currentCert: null,
    savecurrentCert: (currentCert) => set({ currentCert }),
  })),
  {
    name: 'useCurrentCertStore',
  }
)
);

export default useCurrentCertStore;