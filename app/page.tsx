import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import EvidenceGrid from "@/components/EvidenceGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Abstract from "@/components/Abstract";
import NarrativeBrief from "@/components/NarrativeBrief";
import AccountabilityTable from "@/components/AccountabilityTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Abstract />
      <NarrativeBrief />
      <Timeline />
      <AccountabilityTable />
      <EvidenceGrid />
      <Footer />
    </main>
  );
}
