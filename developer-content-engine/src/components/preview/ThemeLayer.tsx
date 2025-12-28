import type { CSSProperties } from "react";

export type VisualizerTheme = {
    id: string;
    name: string;
    background: string;
    borderColor: string;
    fontFamily: string;
    textColor: string;
    decorations: "mac" | "windows";
};

export const VISUALIZER_THEMES: Record<string, VisualizerTheme> = {
    vscode: {
        id: "vscode",
        name: "VS Code",
        background: "#1e1e1e",
        borderColor: "#333333",
        fontFamily: "'Fira Code', monospace",
        textColor: "#d4d4d4",
        decorations: "mac",
    },
    intellij: {
        id: "intellij",
        name: "IntelliJ IDEA",
        background: "#2b2b2b",
        borderColor: "#4d4d4d",
        fontFamily: "'JetBrains Mono', monospace",
        textColor: "#a9b7c6",
        decorations: "windows", // Often used on Windows by Java devs
    },
    "visual-studio": {
        id: "visual-studio",
        name: "Visual Studio",
        background: "#1e1e1e",
        borderColor: "#3e3e42",
        fontFamily: "'Consolas', monospace",
        textColor: "#dcdcdc",
        decorations: "windows",
    },
};

export function getThemeStyles(themeId: string): CSSProperties {
    const theme = VISUALIZER_THEMES[themeId] || VISUALIZER_THEMES["vscode"];
    return {
        backgroundColor: theme.background,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
    };
}
