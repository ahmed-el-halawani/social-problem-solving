import { FileCode2, Search, Trash2, Edit2 } from "lucide-react";
import { useState } from "react";

// Mock Data
const MOCK_SNIPPETS = [
    { id: 1, title: "Two Sum Solution", language: "java", date: "2024-05-15", tags: ["easy", "array"] },
    { id: 2, title: "React Custom Hook", language: "typescript", date: "2024-05-14", tags: ["react", "frontend"] },
    { id: 3, title: "Binary Search", language: "python", date: "2024-05-12", tags: ["algorithm", "binary-search"] },
    { id: 4, title: "Docker Compose Setup", language: "yaml", date: "2024-05-10", tags: ["devops", "docker"] },
    { id: 5, title: "Express Middleware", language: "javascript", date: "2024-05-08", tags: ["backend", "express"] },
];

export function LibraryPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSnippets = MOCK_SNIPPETS.filter(snippet =>
        snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snippet.language.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">My Library</h2>
                    <p className="text-muted-foreground">Manage your saved code snippets and solutions.</p>
                </div>
                <div className="relative w-64">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search snippets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-background border border-input rounded-md pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                </div>
            </div>

            <div className="bg-card rounded-xl border shadow-sm flex-1 overflow-hidden flex flex-col">
                <div className="grid grid-cols-[1fr_100px_150px_100px] gap-4 p-4 border-b bg-muted/40 font-medium text-sm text-muted-foreground">
                    <div>Title</div>
                    <div>Language</div>
                    <div>Date Created</div>
                    <div className="text-right">Actions</div>
                </div>

                <div className="overflow-auto flex-1">
                    {filteredSnippets.length > 0 ? (
                        filteredSnippets.map((snippet) => (
                            <div key={snippet.id} className="grid grid-cols-[1fr_100px_150px_100px] gap-4 p-4 border-b last:border-0 hover:bg-muted/10 transition-colors items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                        <FileCode2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{snippet.title}</div>
                                        <div className="flex gap-2 mt-1">
                                            {snippet.tags.map(tag => (
                                                <span key={tag} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded-full text-secondary-foreground">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm capitalize">{snippet.language}</div>
                                <div className="text-sm text-muted-foreground">{snippet.date}</div>
                                <div className="flex justify-end gap-2">
                                    <button className="p-2 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 hover:bg-destructive/10 rounded-md transition-colors text-muted-foreground hover:text-destructive">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-64 flex flex-col items-center justify-center text-muted-foreground">
                            <FileCode2 className="w-12 h-12 mb-4 opacity-20" />
                            <p>No snippets found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
