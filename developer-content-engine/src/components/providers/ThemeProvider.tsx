import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type CodeTheme = "vscode" | "intellij" | "visual-studio" | "dracula";

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    defaultCodeTheme?: CodeTheme;
    storageKey?: string;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    codeTheme: CodeTheme;
    setCodeTheme: (theme: CodeTheme) => void;
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
    codeTheme: "vscode",
    setCodeTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    defaultCodeTheme = "vscode",
    storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    );
    const [codeTheme, setCodeTheme] = useState<CodeTheme>(
        () => (localStorage.getItem(`${storageKey}-code`) as CodeTheme) || defaultCodeTheme
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
        codeTheme,
        setCodeTheme: (theme: CodeTheme) => {
            localStorage.setItem(`${storageKey}-code`, theme);
            setCodeTheme(theme);
        }
    };

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
