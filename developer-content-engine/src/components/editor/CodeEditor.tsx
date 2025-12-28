import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Default dark theme
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";

// Extend Prism types if needed or just ignore for now
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";

import { cn } from "@/lib/utils";

interface CodeEditorProps {
    code: string;
    language: string;
    onChange: (code: string) => void;
    className?: string;
}

export function CodeEditor({ code, language, onChange, className }: CodeEditorProps) {
    return (
        <div
            className={cn(
                "relative rounded-md border border-input bg-zinc-950 font-mono text-sm shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-ring transition-all",
                className
            )}
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-auto custom-scrollbar">
                <Editor
                    value={code}
                    onValueChange={onChange}
                    highlight={(code) => highlight(code, Prism.languages[language] || Prism.languages.javascript, language)}
                    padding={16}
                    textareaClassName="focus:outline-none"
                    className="font-mono min-h-[300px]"
                    style={{
                        fontFamily: '"Fira Code", "JetBrains Mono", monospace',
                        fontSize: 14,
                        backgroundColor: "transparent", // Let parent handle bg for themes
                    }}
                />
            </div>
        </div>
    );
}
