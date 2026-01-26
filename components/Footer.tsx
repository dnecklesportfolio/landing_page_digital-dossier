export default function Footer() {
    return (
        <footer id="take-action" className="sticky bottom-0 z-50 w-full bg-alert-red text-white py-4 px-6 flex justify-between items-center transform translate-y-0 transition-transform duration-300">
            <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-mono uppercase font-bold tracking-widest text-sm md:text-base">
                    Justice Delayed is Justice Denied
                </span>
            </div>

            <a
                href="mailto:senator@brisport.gov"
                className="bg-black hover:bg-white hover:text-black text-white px-6 py-2 font-serif font-bold transition-all duration-300 uppercase text-sm"
            >
                Email Senator Brisport
            </a>
        </footer>
    );
}
