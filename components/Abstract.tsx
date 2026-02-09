import ContentRenderer from "./ContentRenderer";

export default function Abstract() {
    return (
        <section id="abstract" className="py-20 px-6 bg-black text-white border-y border-white/20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight text-white mb-6">
                    The 53 Madison Street Investigation: <br />
                    <span className="text-alert-red">A Forensic Audit of Institutional Failure.</span>
                </h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-300">
                    <ContentRenderer content="This investigation documents a ==coordinated package of forgeries== used to hijack a Brooklyn brownstone and the specific failure of public officials to intervene despite a confession of forgery by the lender’s own counsel." />
                </p>
            </div>
        </section>
    );
}
