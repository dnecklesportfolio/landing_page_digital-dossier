export default function EvidenceGrid() {
    const documents = [
        "Deed Transfer (2002)",
        "Power of Attorney",
        "Foreclosure Notice",
        "Email Correspondence",
        "Notary Logbook",
        "Title Report"
    ];

    return (
        <section id="the-evidence" className="py-24 px-4 md:px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="border-b border-white/20 pb-8">
                    <h2 className="font-serif text-4xl md:text-5xl">The Paper Trail</h2>
                    <p className="font-mono text-sm text-gray-400 mt-2">Classified Documents / 53 Madison St</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {documents.map((doc, i) => (
                        <div
                            key={i}
                            className="aspect-[3/4] border border-white/10 hover:border-alert-red transition-colors duration-300 p-4 flex flex-col justify-between group cursor-pointer bg-neutral-900"
                        >
                            <div className="w-full h-2/3 bg-neutral-800 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                            <div>
                                <p className="font-mono text-xs text-alert-red mb-1">DOC-{100 + i}</p>
                                <p className="font-serif text-lg leading-tight">{doc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
