import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col justify-between">
      <Navbar />
      <main className="pt-24 pb-12 flex-1">
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
