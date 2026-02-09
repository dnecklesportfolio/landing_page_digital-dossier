export default function Footer() {
    return (
        <footer id="take-action" className="sticky bottom-0 z-50 w-full bg-alert-red text-white py-4 px-6 flex justify-between items-center transform translate-y-0 transition-transform duration-300">
            <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-mono uppercase font-bold tracking-widest text-sm md:text-base">
                    Demand Justice
                </span>
            </div>

            <div className="flex items-center gap-6">
                <p className="hidden md:block font-serif text-sm max-w-lg text-right">
                    <span className="font-bold">The community is watching.</span> Do not add your name to the list of officials who did nothing. Demand action from Forrest & Brisport.
                </p>
                <a
                    href="#"
                    className="bg-white text-alert-red px-6 py-2 rounded-none font-mono text-xs uppercase font-bold tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                    Demand Justice — Contact Your Reps
                </a>
            </div>
        </footer>
    );
}
