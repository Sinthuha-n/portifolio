/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useCallback } from 'react';

interface ResumeModalContextType {
  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined);

export const ResumeModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = useCallback(() => setIsResumeOpen(true), []);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);

  return (
    <ResumeModalContext.Provider value={{ isResumeOpen, openResume, closeResume }}>
      {children}
    </ResumeModalContext.Provider>
  );
};

export const useResumeModal = (): ResumeModalContextType => {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error('useResumeModal must be used within a ResumeModalProvider');
  }
  return context;
};
