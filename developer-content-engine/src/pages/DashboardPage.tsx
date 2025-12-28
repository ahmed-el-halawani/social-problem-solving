import { useState } from "react";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { LanguageSelector } from "@/components/editor/LanguageSelector";
import { MetadataForm } from "@/components/editor/MetadataForm";
import { CodePreviewCard } from "@/components/preview/CodePreviewCard";
import { useTheme } from "@/components/providers/ThemeProvider";

export function DashboardPage() {
    const { codeTheme, setCodeTheme } = useTheme();

    // Editor State
    const [code, setCode] = useState(`class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}`);
    const [language, setLanguage] = useState("java");
    const [title, setTitle] = useState("Two Sum");
    const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Easy");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-8rem)]">
            {/* Editor Section */}
            <div className="bg-card rounded-xl border shadow-sm flex flex-col overflow-hidden">
                <div className="p-4 border-b bg-muted/40 flex items-center justify-between">
                    <h2 className="text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        Editor
                    </h2>
                    <LanguageSelector
                        value={language}
                        onChange={setLanguage}
                        className="w-40"
                    />
                </div>

                <div className="p-4 grid gap-4 overflow-auto">
                    <MetadataForm
                        title={title}
                        onTitleChange={setTitle}
                        difficulty={difficulty}
                        onDifficultyChange={setDifficulty}
                    />

                    <div className="flex-1 min-h-[400px]">
                        <label className="text-sm font-medium mb-2 block">Code Solution</label>
                        <CodeEditor
                            code={code}
                            language={language}
                            onChange={setCode}
                            className="h-[400px] border-slate-700/50"
                        />
                    </div>
                </div>
            </div>

            {/* Preview Section */}
            <div className="bg-card rounded-xl border shadow-sm flex flex-col overflow-hidden">
                <div className="p-4 border-b bg-muted/40 flex items-center justify-between">
                    <h2 className="text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        Preview (LinkedIn)
                    </h2>
                    <div className="flex items-center gap-2">
                        <select
                            value={codeTheme}
                            onChange={(e) => setCodeTheme(e.target.value as any)}
                            className="text-xs bg-background border rounded px-2 py-1 outline-none"
                        >
                            <option value="vscode">VS Code</option>
                            <option value="intellij">IntelliJ</option>
                            <option value="visual-studio">Visual Studio</option>
                        </select>
                    </div>
                </div>
                <div className="flex-1 bg-slate-900/50 p-8 flex items-center justify-center overflow-auto relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}
                    />

                    <div className="z-10 w-full flex justify-center">
                        <CodePreviewCard
                            code={code}
                            language={language}
                            themeId={codeTheme}
                            title={title}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
