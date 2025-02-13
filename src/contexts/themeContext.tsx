import { createContext, useState } from "react";
import { ReactNode } from "react";

// Define the shape of the context value
interface ThemeContextType {
  theme: string;
  changeTheme: () => void;
}

// Khởi tạo UserContext với giá trị mặc định
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "black" : "light");
  };
  const valueTheme = {
    theme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={valueTheme}>{children}</ThemeContext.Provider>
  );
};
