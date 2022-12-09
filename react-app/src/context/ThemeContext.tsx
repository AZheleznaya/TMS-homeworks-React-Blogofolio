import React, {createContext, FC, useContext, useMemo, useState, useEffect} from 'react';

import {WithChildren} from "../types/withChildren";

enum ThemeVariant {
    light = "light",
    dark = "dark"
}

interface ThemeContextValue {
    theme: ThemeVariant | string
    setTheme: (theme: ThemeVariant) => void
    isDarkTheme: boolean
    isLightTheme: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const ThemeProvider: FC<WithChildren> = ({children}) => {

    const [theme, setTheme] = useState("");

    const isDarkTheme = useMemo(() => theme === ThemeVariant.dark, [theme]);
    const idLightTheme = useMemo(() => theme === ThemeVariant.light, [theme]);

    const handleSetTheme = (newTheme: ThemeVariant) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const activeTheme = localStorage.getItem("theme");
        if (activeTheme) {
            setTheme(activeTheme);
        }
    },[theme])

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: handleSetTheme,
            isDarkTheme: isDarkTheme,
            isLightTheme: idLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used with ThemeProvider")
    } else {
        return context
    }
}

export {useTheme, ThemeProvider, ThemeVariant};