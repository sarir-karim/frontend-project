import React, { createContext, useState, useEffect } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    return () => {
      setActivePage('');
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
