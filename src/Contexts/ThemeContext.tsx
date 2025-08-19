import React from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
    theme: "dark",setTheme: () => {}
});

export function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = React.useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}