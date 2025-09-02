// context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';


const ThemeContext = createContext();

// Crée le fournisseur de contexte
export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook pour utiliser le contexte facilement
export const useThemeContext = () => useContext(ThemeContext);