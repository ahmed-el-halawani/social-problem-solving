import { Blocks, FileCode2, LayoutDashboard, Settings } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function MainLayout() {
    const [activePath, setActivePath] = useState("/");

    const navItems = [
        { name: "Dashboard", path: "/", icon: LayoutDashboard },
        { name: "My Library", path: "/library", icon: FileCode2 },
        { name: "Templates", path: "/templates", icon: Blocks },
        { name: "Settings", path: "/settings", icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-sidebar-background flex-col hidden md:flex">
                <div className="p-6 border-b border-sidebar-border">
                    <h1 className="text-xl font-bold tracking-tight text-sidebar-foreground">
                        DevContent<span className="text-primary">Engine</span>
                    </h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setActivePath(item.path)}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                activePath === item.path
                                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-sidebar-border">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                            JD
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">John Doe</span>
                            <span className="text-xs text-muted-foreground">Pro Plan</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                <header className="h-14 border-b border-border flex items-center px-6 justify-between bg-background/50 backdrop-blur-sm z-10 sticky top-0">
                    <div className="md:hidden">
                        {/* Mobile Menu Trigger Placeholder */}
                        <button className="text-muted-foreground">Menu</button>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        {/* Header Actions */}
                        <button className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90 transition">
                            + New Post
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-6 md:p-8 bg-muted/20">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
