import ContentRenderer from "./ContentRenderer";

export default function NarrativeBrief() {
    return (
        <section id="narrative" className="py-24 px-4 md:px-8 bg-neutral-900 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-12 text-center">[ NARRATIVE BRIEF ]</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* The Victim */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-2xl font-bold border-b-2 border-white/20 pb-2 text-white">The Victim</h4>
                        <p className="font-serif text-lg leading-relaxed text-gray-300">
                            <span className="font-bold text-white">Yvonne Williams</span> is a scientist and founder of YLW Squared Inc., a company established to renovate distressed Brooklyn homes with dignity rather than flipping them for fast cash.
                        </p>
                    </div>

                    {/* The Stakes */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-2xl font-bold border-b-2 border-alert-red pb-2 text-white">The Stakes</h4>
                        <p className="font-serif text-lg leading-relaxed text-gray-300">
                            She purchased the brownstone at 53 Madison Street to secure her family&apos;s future, but now faces total loss due to a foreclosure based entirely on fraud.
                        </p>
                    </div>

                    {/* The Villain */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-2xl font-bold border-b-2 border-white/20 pb-2 text-white">The Villain</h4>
                        <p className="font-serif text-lg leading-relaxed text-gray-300">
                            Her ownership was hijacked through a <ContentRenderer content="==coordinated package of forgeries==" />&mdash;including fake signatures and altered corporate records&mdash;allegedly orchestrated by predatory lenders while the courts refused to intervene.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
