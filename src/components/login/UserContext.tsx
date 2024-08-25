"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface UserContextProps {
  hasUser: boolean;
  toggleUser: () => void;
  logoutUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [hasUser, setUser] = useState<boolean>(false);

  const toggleUser = useCallback(() => {
    setUser((prev) => !prev);
  }, []);

  const logoutUser = useCallback(() => {
    setUser(false);
  }, []);

  return (
    <UserContext.Provider value={{ hasUser, toggleUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
 
export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};