"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [accessCode, setAccessCode] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (accessCode === "53Madison1") {
            // Set cookie for session authorization
            document.cookie = "auth_token=dossier_access_granted; path=/; max-age=86400; SameSite=Strict";
            router.push("/");
        } else {
            setError(true);
            setAccessCode("");
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
            <div className="max-w-md w-full space-y-12 border-2 border-white p-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight uppercase border-b-2 border-white pb-4 mb-8">
                        Authorized Personnel Only
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <label htmlFor="code" className="text-sm font-bold uppercase block tracking-widest">
                            Access Code
                        </label>
                        <input
                            id="code"
                            type="password"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                            className={`w-full bg-black border-2 ${error ? 'border-red-600' : 'border-white'} p-4 text-center text-3xl font-mono focus:outline-none focus:bg-white focus:text-black transition-all`}
                            placeholder="••••••••"
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] py-5 hover:bg-black hover:text-white border-2 border-white transition-all duration-300"
                    >
                        Enter Dossier
                    </button>
                </form>

                {error && (
                    <div className="bg-red-600 text-white p-4 text-center font-bold animate-pulse uppercase tracking-wider">
                        Access Denied
                    </div>
                )}
            </div>

            <p className="mt-8 font-mono text-[10px] opacity-30 uppercase tracking-[0.5em]">
                System ID: 53-MADISON-V2
            </p>
        </main>
    );
}
