"use client";

import { Info } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
    const { content } = useLanguage();

    const quickFacts = [
        content.contact.location,
        "UEDCL",
        "28+ Years",
        "Embedded Systems",
    ];

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <button className="group relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border/50 bg-background/50 text-foreground shadow-sm backdrop-blur-md transition-all duration-500 hover:border-foreground/30 hover:bg-foreground hover:text-background focus:outline-none">
                    <div className="absolute inset-0 flex h-full w-full -translate-x-full justify-center -skew-x-13 group-hover:translate-x-full group-hover:duration-1000">
                        <div className="relative h-full w-4 bg-background/20 dark:bg-background/20" />
                    </div>
                    <span className="relative z-10 flex items-center justify-center">
                        <Info className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
                    </span>
                    <span className="sr-only">Quick Facts</span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="z-120 min-w-[180px] rounded-2xl border-border/50 bg-background/95 p-2 shadow-2xl backdrop-blur-xl"
            >
                <div className="px-3 pt-2 pb-1 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    Quick Facts
                </div>

                {quickFacts.map((fact) => (
                    <DropdownMenuItem
                        key={fact}
                        className="my-0.5 rounded-xl focus:bg-secondary"
                        onSelect={(event) => event.preventDefault()}
                    >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                        <span className="text-xs uppercase tracking-widest">
                            {fact}
                        </span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
