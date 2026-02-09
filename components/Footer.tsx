export default function Footer() {
    return (
        <footer id="take-action" className="relative w-full bg-black text-white min-h-[500px] flex flex-col justify-center items-center py-32 px-6 border-t border-white/10 overflow-hidden">
            {/* Background Texture/Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-alert-red/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-alert-red/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <span className="font-mono text-alert-red text-sm tracking-[0.3em] font-bold uppercase">
                        [ PUBLIC_ACTION_REQUIRED ]
                    </span>
                    <h2 className="font-sans text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-white">
                        DEMAND<br />JUSTICE
                    </h2>
                </div>

                <div className="max-w-2xl space-y-8">
                    <p className="font-serif text-xl md:text-2xl leading-relaxed text-white">
                        <span className="font-bold underline decoration-alert-red decoration-2 underline-offset-4">
                            The community is watching.
                        </span>
                        {" "}Do not add your name to the list of officials who did nothing. Demand immediate investigation into the 53 Madison Street theft.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                        <a
                            href="mailto:contact@representative.gov?subject=Investigation Demand: 53 Madison Street"
                            className="bg-[#FF3B30] text-white px-12 py-5 rounded-none font-sans text-sm uppercase font-black tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 shadow-[8px_8px_0px_rgba(255,59,48,0.3)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                        >
                            Demand Action — Contact Reps
                        </a>
                    </div>
                </div>

                <div className="pt-24 w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        © 2026 The 53 Madison Investigation | Independent Forensic Audit
                    </div>
                    <div className="flex gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        <span>Restricted Access</span>
                        <span className="text-gray-700">|</span>
                        <span>Archival Record</span>
                    </div>
                </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-white/5 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-white/5 pointer-events-none"></div>
        </footer>
    );
}
