export default function AccountabilityTable() {
    const officials = [
        {
            name: "Lawrence Knipel",
            role: "Supreme Court Judge",
            failure: "Proceeded with foreclosure despite proof of mortgage fraud and a recorded confession that the lender’s counsel forged the signatures on the mortgage and note.",
        },
        {
            name: "Helmer Burchard",
            role: "Court-Appointed Referee",
            failure: "Verified the foreclosure as legitimate without checking wires, business records, or canceled checks—simply repeating the lender's claims.",
        },
        {
            name: "Eric Gonzalez",
            role: "Brooklyn DA",
            failure: "Refused to bring criminal charges despite forensic proof of forgery and a direct admission of the crime by the lender’s attorney.",
        },
        {
            name: "Letitia James",
            role: "NY Attorney General",
            failure: "Declined to intervene on Case #531361, citing a 'conflict of interest' while the institutional theft of the property proceeded.",
        },
    ];

    return (
        <section id="accountability" className="py-24 px-4 md:px-8 bg-neutral-950 text-white">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">The Wall of Inaction</h2>
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-400">Official Accountability Record</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-white/30">
                                <th className="py-4 px-4 font-mono text-xs uppercase tracking-widest text-gray-400">Entity</th>
                                <th className="py-4 px-4 font-mono text-xs uppercase tracking-widest text-gray-400">Role</th>
                                <th className="py-4 px-4 font-mono text-xs uppercase tracking-widest text-gray-400">The Failure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {officials.map((official, index) => (
                                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-4 font-serif font-bold text-lg whitespace-nowrap text-white">{official.name}</td>
                                    <td className="py-6 px-4 font-mono text-sm text-gray-400 whitespace-nowrap">{official.role}</td>
                                    <td className="py-6 px-4 font-serif text-base leading-relaxed max-w-md text-gray-300">{official.failure}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
