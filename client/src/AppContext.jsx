import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <AppContext.Provider value={{ submittedData, setSubmittedData }}>
      {children}
    </AppContext.Provider>
  );
};
