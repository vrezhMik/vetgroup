"use client";

import { createContext, useContext, ReactNode } from "react";
import { excelData } from "./../../startup";

// Define the context type
interface ExcelDataContextType {
  data: any[] | null;
}

// Create the context
const ExcelDataContext = createContext<ExcelDataContextType | undefined>(
  undefined
);

// Provider component
export const ExcelDataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ExcelDataContext.Provider value={{ data: excelData }}>
      {children}
    </ExcelDataContext.Provider>
  );
};

// Custom hook to use the context
export const useExcelData = () => {
  const context = useContext(ExcelDataContext);
  if (!context) {
    throw new Error("useExcelData must be used within an ExcelDataProvider");
  }
  return context;
};
