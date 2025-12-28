import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps extends Omit<ComponentProps<"select">, "className" | "onChange"> {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function LanguageSelector({ value, onChange, className, ...props }: LanguageSelectorProps) {
    return (
        <div className={cn("relative group", className)}>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full appearance-none bg-background border border-input hover:border-accent transition-colors rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                {...props}
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                        {lang.name}
                    </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none group-hover:text-foreground transition-colors" />
        </div>
    );
}
