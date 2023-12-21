/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export interface ThemeConfigStore {
  direction: 'ltr' | 'rtl';
  colorScheme: 'dark' | 'light';
  locale?: string;
  setDirection: (direction: 'ltr' | 'rtl') => void;
  setColorScheme: (colorScheme: any) => void;
  setLocale: (locale: string) => void;
}
export const globalThemeStore = create<ThemeConfigStore>()(
  persist(
    (set, get) => ({
      direction: 'ltr',
      colorScheme: 'light',
      locale: 'en',
      setDirection: (direction: 'ltr' | 'rtl') => set({ direction }),
      setColorScheme: (colorScheme: any) => set({ colorScheme }),
      setLocale: (locale: string) => set({ locale })
    }),
    {
      name: 'docs-storage' // name of the item in the storage (must be unique)
    }
  )
);
