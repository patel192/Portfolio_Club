import { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  { id: 'dbsc',      label: 'DBSC',      icon: '🦁', desc: 'Black & Gold' },
  { id: 'aastrive',  label: 'Aastrive',  icon: '🎯', desc: 'Red & White'  },
  { id: 'champions', label: 'Champions', icon: '🏆', desc: 'Navy & Gold'  },
  { id: 'midnight',  label: 'Midnight',  icon: '🌙', desc: 'Dark Violet'  },
];

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('champions');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
