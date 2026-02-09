import ContentRenderer from "./ContentRenderer";

export default function EvidenceGrid() {
    const documents = [
        {
            id: "EXHIBIT A",
            title: "The Address Switch",
            date: "June 29, 2021",
            size: "FRAUD_ON_SERVICE",
            description: "On June 29, 2021, the corporation's address was fraudulently changed to Montvale, NJ—ensuring Yvonne never saw a single legal notice."
        },
        {
            id: "EXHIBIT B",
            title: "The Forgery Confession",
            date: "Aug 2, 2021",
            size: "ADMISSION_OF_CRIME",
            highlight: true,
            description: "Recorded admission where the lender's attorney stated their secretary forged Yvonne's signature on the mortgage and note to commence the foreclosure."
        },
        {
            id: "EXHIBIT C",
            title: "The $15,000 Theft",
            date: "Aug 2, 2021",
            size: "ILLEGAL_TAX",
            description: "At the August 2, 2021 closing, ==National Standard Abstract (NSA)==—represented by ==Paul Interlandi==—knowingly collected a 'Mansion Tax' on a 6-unit property where the tax is legally impossible. The money disappeared at the closing table. This ==$15,000== was part of a coordinated package of 'stolen fees' that vanished at the closing table."
        },
        {
            id: "EXHIBIT D",
            title: "The Factory of Fraud",
            date: "Multiple",
            size: "COORDINATED_CRIMINAL_ACTS",
            description: "We have documented over 100 instances of forged signatures within a single closing binder, proving a coordinated effort to steal 53 Madison Street."
        },
    ];

    return (
        <section id="the-evidence" className="py-24 px-4 md:px-8 bg-black text-white relative overflow-hidden">
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8 gap-4">
                    <div>
                        <span className="tech-text-xs text-alert-red block mb-2">[ EVIDENCE_LOCKER ]</span>
                        <h2 className="font-serif text-5xl md:text-7xl">The Receipts</h2>
                    </div>
                    <p className="font-mono text-xs text-gray-500 max-w-sm text-right">
                        FORENSIC ANALYSIS OF RECOVERED DOCUMENTS <br />
                        EXHIBITS A-D
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, i) => (
                        <div
                            key={i}
                            className={`group relative min-h-[300px] border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 transition-colors duration-300 overflow-hidden cursor-crosshair ${doc.highlight ? 'border-alert-red/50' : ''}`}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-alert-red/0 group-hover:bg-alert-red/10 transition-colors duration-300 z-0"></div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                <div className="flex justify-between items-start">
                                    <span className={`font-mono text-sm tracking-widest ${doc.highlight ? 'text-alert-red' : 'text-gray-500'}`}>
                                        {doc.id}
                                    </span>
                                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-alert-red transition-colors"></div>
                                </div>

                                <div className="space-y-4 my-auto">
                                    <h3 className="font-serif text-3xl md:text-4xl leading-none mb-4">{doc.title}</h3>
                                    <p className="font-serif text-lg leading-relaxed text-gray-400 group-hover:text-white transition-colors">
                                        &ldquo;<ContentRenderer content={doc.description} />&rdquo;
                                    </p>
                                </div>

                                <div className="flex justify-between items-end pt-4 border-t border-white/5">
                                    <span className="font-mono text-[9px] text-gray-400">DATE: {doc.date}</span>
                                    <span className="font-mono text-[9px] text-gray-400">STATUS: {doc.size}</span>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/50"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/50"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
