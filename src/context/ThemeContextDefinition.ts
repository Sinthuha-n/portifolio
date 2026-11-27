import { createContext } from 'react';

export type ThemeChoice = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: ThemeChoice;
  effectiveTheme: 'light' | 'dark';
  setTheme: (choice: ThemeChoice) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
