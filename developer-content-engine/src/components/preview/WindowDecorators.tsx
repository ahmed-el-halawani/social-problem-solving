import { cn } from "@/lib/utils";

interface WindowDecoratorsProps {
    type?: "mac" | "windows";
    className?: string;
    title?: string;
}

export function WindowDecorators({ type = "mac", className, title }: WindowDecoratorsProps) {
    if (type === "windows") {
        return (
            <div className={cn("flex items-center justify-between px-4 py-2 bg-zinc-900", className)}>
                <div className="text-xs text-zinc-400 font-sans">{title || "Untitled"}</div>
                <div className="flex gap-4">
                    <div className="w-2.5 h-2.5 bg-zinc-600 rounded-sm" />
                    <div className="w-2.5 h-2.5 bg-zinc-600 rounded-sm" />
                    <div className="w-2.5 h-2.5 bg-zinc-600 rounded-sm" />
                </div>
            </div>
        );
    }

    // Default to Mac
    return (
        <div className={cn("flex items-center px-4 py-3 bg-[#1e1e1e] rounded-t-lg", className)}>
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
            </div>
            <div className="absolute left-0 right-0 text-center pointer-events-none">
                <span className="text-xs text-zinc-400 font-sans opacity-70">{title}</span>
            </div>
        </div>
    );
}
