import { LayoutTemplate, ArrowRight, Code2, Database } from "lucide-react";
import { Link } from "react-router-dom";

// Mock Data
const TEMPLATES = [
    { id: 1, title: "Blind 75 Setup", category: "Interview", description: "Standard boilerplate for LeetCode style problems", icon: Code2 },
    { id: 2, title: "React Component", category: "Frontend", description: "Functional component with props interface", icon: LayoutTemplate },
    { id: 3, title: "Express Route", category: "Backend", description: "Async route handler with error catching", icon: Database },
    { id: 4, title: "SQL Schema", category: "Database", description: "CREATE TABLE with common audit fields", icon: Database },
    { id: 5, title: "Docker Compose", category: "DevOps", description: "Node.js + Postgres setup", icon: LayoutTemplate },
];

export function TemplatesPage() {
    return (
        <div className="h-full flex flex-col gap-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Templates</h2>
                <p className="text-muted-foreground">Start faster with pre-built boilerplate code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TEMPLATES.map((template) => (
                    <div key={template.id} className="bg-card rounded-xl border shadow-sm p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 -rotate-12 transform group-hover:scale-110 transition-transform">
                            <template.icon className="w-24 h-24" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <template.icon className="w-6 h-6" />
                            </div>

                            <h3 className="font-semibold text-lg mb-1">{template.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{template.description}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground font-medium">
                                    {template.category}
                                </span>
                                <Link to="/" className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Use Template <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
