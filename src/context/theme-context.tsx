import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({children}: {children: ReactNode}){
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode){
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode])

  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return(
    <ThemeContext.Provider value={{isDarkMode, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export function useTheme(){
  const context = useContext(ThemeContext);
  if (!context){
    throw new Error("useTheme must be in ThemeProvider");
  }
  return context;
};