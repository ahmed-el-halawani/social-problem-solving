import type { CSSProperties } from "react";

export type VisualizerTheme = {
    id: string;
    display: string; // The display name
    name: string; // Internal or alternate name
    background: string;
    borderColor: string;
    fontFamily: string;
    textColor: string;
    decorations: "mac" | "windows";
    tokens: {
        comment: string;
        punctuation: string;
        string: string;
        keyword: string;
        boolean: string;
        function: string;
        number: string;
        className: string;
        operator: string;
    };
};

export const VISUALIZER_THEMES: Record<string, VisualizerTheme> = {
    vscode: {
        id: "vscode",
        display: "VS Code",
        name: "VS Code",
        background: "#1e1e1e",
        borderColor: "#333333",
        fontFamily: "'Fira Code', monospace",
        textColor: "#d4d4d4",
        decorations: "mac",
        tokens: {
            comment: "#6A9955",
            punctuation: "#D4D4D4",
            string: "#CE9178",
            keyword: "#569CD6",
            boolean: "#569CD6",
            function: "#DCDCAA",
            number: "#B5CEA8",
            className: "#4EC9B0",
            operator: "#D4D4D4",
        },
    },
    intellij: {
        id: "intellij",
        display: "IntelliJ IDEA",
        name: "IntelliJ IDEA",
        background: "#2b2b2b",
        borderColor: "#4d4d4d",
        fontFamily: "'JetBrains Mono', monospace",
        textColor: "#a9b7c6",
        decorations: "windows", // Often used on Windows by Java devs
        tokens: {
            comment: "#808080",
            punctuation: "#cc7832",
            string: "#6a8759",
            keyword: "#cc7832",
            boolean: "#cc7832",
            function: "#ffc66d",
            number: "#6897bb",
            className: "#a9b7c6",
            operator: "#a9b7c6",
        },
    },
    "visual-studio": {
        id: "visual-studio",
        display: "Visual Studio",
        name: "Visual Studio",
        background: "#252526",
        borderColor: "#3e3e42",
        fontFamily: "'Consolas', monospace",
        textColor: "#dcdcdc",
        decorations: "windows",
        tokens: {
            comment: "#57a64a",
            punctuation: "#dcdcdc",
            string: "#d69d85",
            keyword: "#569cd6",
            boolean: "#569cd6",
            function: "#dcdcdc",
            number: "#b5cea8",
            className: "#4ec9b0",
            operator: "#b4b4b4",
        },
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
