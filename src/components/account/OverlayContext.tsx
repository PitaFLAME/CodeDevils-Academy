import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface OverlayContextProps {
  isOverlayOpen: boolean;
  toggleOverlay: () => void;
  closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextProps | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false);

  
  const toggleOverlay = useCallback(() => {
    setOverlayOpen((prev) => !prev);
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayOpen(false);
  }, []);


  return (
    <OverlayContext.Provider value={{ isOverlayOpen, toggleOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};



export const useOverlay = (): OverlayContextProps => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};