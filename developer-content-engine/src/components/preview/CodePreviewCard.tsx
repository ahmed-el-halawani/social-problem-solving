import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { WindowDecorators } from "./WindowDecorators";
import { getThemeStyles, VISUALIZER_THEMES } from "./ThemeLayer";
import Prism from "prismjs";
import { cn } from "@/lib/utils";
import { Download, Loader2 } from "lucide-react";

interface CodePreviewCardProps {
    code: string;
    language: string;
    themeId: string;
    title: string;
}

export function CodePreviewCard({ code, language, themeId, title }: CodePreviewCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    const theme = VISUALIZER_THEMES[themeId] || VISUALIZER_THEMES["vscode"];
    const themeStyles = getThemeStyles(themeId);

    const handleDownload = async () => {
        if (!ref.current) return;
        setLoading(true);
        try {
            const dataUrl = await toPng(ref.current, { cacheBust: true, pixelRatio: 2 });
            const link = document.createElement("a");
            link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-snippet.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const codeHtml = Prism.highlight(
        code,
        Prism.languages[language] || Prism.languages.javascript,
        language
    );

    return (
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
            {/* Actions */}
            <div className="flex justify-end gap-2">
                <button
                    onClick={handleDownload}
                    disabled={loading}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                    {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Download className="w-3 h-3" />}
                    Export PNG
                </button>
            </div>

            {/* The Card (What gets exported) */}
            <div
                ref={ref}
                className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform min-w-[500px]"
                style={{
                    background: theme.background
                }}
            >
                <WindowDecorators type={theme.decorations} title={title} />

                <div
                    className="p-6 overflow-x-hidden text-sm"
                    style={themeStyles}
                >
                    <pre
                        className={cn("!bg-transparent !m-0 !p-0 overflow-hidden whitespace-pre-wrap break-words")}
                        style={{ fontFamily: theme.fontFamily }}
                    >
                        <code
                            dangerouslySetInnerHTML={{ __html: codeHtml }}
                            className={`language-${language}`}
                        />
                    </pre>
                </div>
            </div>
        </div>
    );
}
