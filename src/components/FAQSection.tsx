import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Athletica and who is it designed for?",
    a: "Athletica is an all-in-one operating platform specifically designed for fitness trainers, personal coaches, and online fitness entrepreneurs in Egypt and the MENA region. It replaces fragmented tools like WhatsApp, Excel, and PDFs with a single professional workspace for client management, workout programming, progress tracking, and scheduling.",
  },
  {
    q: "How does the Founding Pilot Program work?",
    a: "The pilot program is strictly limited to 50 founding coaches. As a pilot coach, you receive 100% free access to the platform during the pilot phase, a direct line to our founding product team to shape feature priorities, and permanent founding coach perks when we officially launch publicly.",
  },
  {
    q: "Is Athletica Arabic-first?",
    a: "Yes. Athletica is built ground-up for coaches and clients in the Middle East & North Africa. Both the coach dashboard and client mobile interface natively support full Arabic language, local client communication channels (WhatsApp integration), and regionally tailored workflow defaults.",
  },
  {
    q: "Can I import existing client logs and workout plans from Excel?",
    a: "Yes. Our team will help pilot coaches import existing client rosters, exercise templates, and workout spreadsheets directly into Athletica during onboarding so you don't lose any client history.",
  },
  {
    q: "How is my client data protected?",
    a: "Your data security and client confidentiality are top priorities. All client workout logs, photos, check-ins, and personal data are encrypted in transit and at rest using bank-grade security protocols.",
  },
  {
    q: "How much will Athletica cost after the pilot phase?",
    a: "Pilot coaches will lock in exclusive founding rate discounts (up to 50% off standard pricing) for life once commercial subscriptions launch. There are no credit cards required to join the waitlist.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-[#5A0BFB] uppercase tracking-widest mb-2 block">
          Got Questions?
        </span>
        <h2 className="font-['Cervino'] font-black text-3xl sm:text-5xl text-white mb-4 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-[#8B8B9E] text-base max-w-xl mx-auto">
          Everything you need to know about joining the Athletica pilot cohort.
        </p>
      </div>

      <div className="glass-strong rounded-2xl p-6 sm:p-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
