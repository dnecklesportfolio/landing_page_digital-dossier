"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [accessCode, setAccessCode] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (accessCode.toUpperCase() === "53MADISON") {
            // Set cookie (client-side for simplicity in this specific context)
            document.cookie = "auth_token=dossier_access_granted; path=/; max-age=86400; SameSite=Strict";
            router.push("/");
        } else {
            setError(true);
            setAccessCode("");
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-serif">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20"></div>

            <div className="max-w-md w-full space-y-8 relative z-10 border border-white/10 p-12 bg-neutral-900/50 backdrop-blur-sm">
                <div className="text-center space-y-2">
                    <span className="font-mono text-[10px] text-alert-red tracking-[0.2em] uppercase">
                        [ RESTRICTED_ACCESS ]
                    </span>
                    <h1 className="text-4xl md:text-5xl font-normal tracking-tight">
                        Case #53-MAD
                    </h1>
                    <p className="font-mono text-xs text-gray-500 uppercase py-4 border-y border-white/5">
                        Digital Dossier Authorization Required
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                    <div className="space-y-2">
                        <label htmlFor="code" className="font-mono text-[10px] text-gray-500 uppercase block ml-1">
                            Enter Access Credentials
                        </label>
                        <input
                            id="code"
                            type="password"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                            className={`w-full bg-black border ${error ? 'border-alert-red' : 'border-white/20'} p-4 text-center text-2xl tracking-[0.3em] font-mono focus:outline-none focus:border-white/50 transition-colors uppercase`}
                            placeholder="••••••••"
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-mono text-xs uppercase tracking-widest py-4 hover:bg-alert-red hover:text-white transition-all duration-300 active:scale-[0.98]"
                    >
                        Authenticate Access
                    </button>
                </form>

                {error && (
                    <p className="text-alert-red font-mono text-[10px] text-center mt-4 animate-pulse">
                        INVALID CREDENTIALS: ACCESS DENIED
                    </p>
                )}

                <div className="pt-12 flex justify-between items-center opacity-30">
                    <div className="h-px bg-white flex-1"></div>
                    <span className="font-mono text-[8px] mx-4 uppercase">Investigative Asset v2.0</span>
                    <div className="h-px bg-white flex-1"></div>
                </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-white/10 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-white/10 pointer-events-none"></div>
        </main>
    );
}
