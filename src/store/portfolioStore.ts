import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Experience } from "../interfaces/Experience";

interface PortfolioState {
  isLoading: boolean;
  profile: { [id: string]: unknown };
  experience: { [id: string]: Experience };
  locale: "es" | "en";
  setPortfolioData: (
    profile: { [id: string]: unknown },
    experience: { [id: string]: Experience }
  ) => void;
  setLocale: (locale: "es" | "en") => void;
  loadLocaleFromStorage: () => void;
}

export const usePortfolioStore = create<PortfolioState>()(
  devtools((set) => ({
    isLoading: true,
    profile: {},
    experience: {},
    locale: "en",
    setPortfolioData(profile, experience) {
      set(() => ({
        profile,
        experience,
        isLoading: false,
      }));
    },
    setLocale(locale) {
      set({ locale });
      localStorage.setItem("locale", locale);
    },
    loadLocaleFromStorage() {
      const storedLocale = localStorage.getItem("locale");

      if (storedLocale && (storedLocale == "en" || storedLocale == "es")) {
        set({ locale: storedLocale as "en" | "es" });
      }
    },
  }))
);
