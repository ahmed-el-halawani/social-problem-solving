import { User, Globe, Moon, LogOut } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function SettingsPage() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your account and connection preferences.</p>
            </div>

            <div className="grid gap-8">
                {/* Profile Section */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" /> Profile
                    </h3>
                    <div className="bg-card rounded-xl border shadow-sm p-6">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                                JD
                            </div>
                            <div>
                                <h4 className="font-medium text-lg">John Doe</h4>
                                <p className="text-muted-foreground text-sm">john.doe@example.com</p>
                            </div>
                            <button className="ml-auto text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md transition-colors">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </section>

                {/* Appearance Section */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Moon className="w-5 h-5 text-primary" /> Appearance
                    </h3>
                    <div className="bg-card rounded-xl border shadow-sm p-6">
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                onClick={() => setTheme("light")}
                                className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-transparent bg-muted/50 hover:bg-muted'}`}
                            >
                                <div className="w-full h-24 rounded bg-[#ffffff] border shadow-sm"></div>
                                <span className="text-sm font-medium">Light</span>
                            </button>
                            <button
                                onClick={() => setTheme("dark")}
                                className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-transparent bg-muted/50 hover:bg-muted'}`}
                            >
                                <div className="w-full h-24 rounded bg-[#09090b] border shadow-sm"></div>
                                <span className="text-sm font-medium">Dark</span>
                            </button>
                            <button
                                onClick={() => setTheme("system")}
                                className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${theme === 'system' ? 'border-primary bg-primary/5' : 'border-transparent bg-muted/50 hover:bg-muted'}`}
                            >
                                <div className="w-full h-24 rounded bg-gradient-to-r from-[#ffffff] to-[#09090b] border shadow-sm"></div>
                                <span className="text-sm font-medium">System</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Connections Section */}
                <section className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" /> Connections
                    </h3>
                    <div className="bg-card rounded-xl border shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded bg-[#0077b5] flex items-center justify-center text-white font-bold text-lg">in</div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <p className="text-sm text-muted-foreground">Not connected</p>
                                </div>
                            </div>
                            <button className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
                                Connect
                            </button>
                        </div>
                    </div>
                </section>

                {/* Account Actions */}
                <section className="pt-4">
                    <button className="flex items-center gap-2 text-destructive hover:bg-destructive/10 px-4 py-2 rounded-md transition-colors text-sm font-medium">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </section>
            </div>
        </div>
    );
}
