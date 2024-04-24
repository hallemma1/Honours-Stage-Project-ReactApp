import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState({
    primaryColor: '#0661F4',
    primaryColorLight: '#66A1FF',
    primaryColorDark: '#0040A8',
    secondaryColor: '#BC388C',
    secondaryColorLight: '#EF81C7',
    secondaryColorDark: '#97216C',
    textColorDark: '#000',
    textColorLight: '#FFF',
    textColorDarkGrey: '#666',
    backgroundColor: '#FFF',
    lightGreyBackground: '#FAFAFA',
    lightShadow: '#EBEBEB',
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
