import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface MetadataFormProps extends ComponentProps<"div"> {
    title: string;
    onTitleChange: (value: string) => void;
    difficulty: "Easy" | "Medium" | "Hard";
    onDifficultyChange: (value: "Easy" | "Medium" | "Hard") => void;
}

export function MetadataForm({
    title,
    onTitleChange,
    difficulty,
    onDifficultyChange,
    className,
    ...props
}: MetadataFormProps) {
    return (
        <div className={cn("grid gap-4", className)} {...props}>
            <div className="grid gap-2">
                <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Problem Title
                </label>
                <input
                    id="title"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="e.g. Two Sum"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
            </div>
            <div className="grid gap-2">
                <label htmlFor="difficulty" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Difficulty
                </label>
                <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => onDifficultyChange(e.target.value as any)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
        </div>
    );
}
