import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#0661F4',
    secondaryColor: '#FFF',
    textColorDark: '#000',
    textColorLight: '#FFF',
    backgroundColor: '#FFF',
    lightGreyBackground: '#FAFAFA',
    lightShadow: '#EBEBEB',
    // Add more color variables as needed
  });

  useEffect(() => {
    // Dynamically set CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};