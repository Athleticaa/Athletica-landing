import {
  CheckCircle2,
  MessageCircle,
  FileSpreadsheet,
  LayoutDashboard,
  Users,
  Dumbbell,
  LineChart,
  Calendar,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans overflow-x-hidden relative">
      {/* Background glow Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#5A0BFB] blur-[180px] opacity-[0.09] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B3FFF] blur-[160px] opacity-[0.07] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10 pt-16">
        {/* ── 1. HERO SECTION ── */}
        <section id="home" className="relative pt-16 pb-20 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-left">
              {/* Pilot Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5A0BFB]/10 border border-[#5A0BFB]/30 text-[#5A0BFB] text-xs font-semibold uppercase tracking-wider w-fit">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                Accepting Founding Coaches — 50 Spots Only
              </div>

              {/* Main Headline */}
              <h1 className="font-['Cervino'] font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
                The Operating System for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A0BFB] via-[#7B3FFF] to-[#9D66FF]">
                  Fitness Coaches.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#8B8B9E] leading-relaxed max-w-xl">
                Manage clients, deliver structured workout programs, and track progress — all in one professional platform built specifically for fitness trainers in Egypt & MENA.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base bg-gradient-to-br from-[#5A0BFB] to-[#7B2FFF] hover:from-[#4908D4] hover:to-[#6A28E5] text-white border-none shadow-[0_0_30px_rgba(90,11,251,0.4)] transition-all hover:scale-[1.02]"
                >
                  <a href="#waitlist">
                    Join the Waitlist <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-14 px-8 text-base"
                >
                  <a href="#solution">See How It Works</a>
                </Button>
              </div>

              {/* Microcopy & Trust */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#8B8B9E] pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5A0BFB]" /> Free during pilot
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5A0BFB]" /> Native Arabic support
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5A0BFB]" /> No credit card required
                </span>
              </div>
            </div>

            {/* Right Mockup Card */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5A0BFB]/30 to-transparent rounded-3xl blur-3xl" />
              <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                
                {/* Header bar */}
                <div className="px-5 py-3.5 border-b border-[#1E1E2E] flex items-center justify-between bg-[#0A0A0F]/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-[#8B8B9E] font-medium tracking-wide">
                    Athletica — Coach Command Center
                  </span>
                </div>

                {/* Dashboard Inner Body */}
                <div className="p-5 flex flex-col gap-4 bg-[#0A0A0F]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-white">Active Coaching Roster</h3>
                      <p className="text-[11px] text-[#8B8B9E]">14 active clients this week</p>
                    </div>
                    <span className="text-[11px] bg-[#5A0BFB]/20 text-[#5A0BFB] border border-[#5A0BFB]/30 px-2.5 py-1 rounded-lg font-semibold">
                      + Add New Client
                    </span>
                  </div>

                  {/* Client Cards */}
                  {[
                    {
                      init: "AK",
                      name: "Ahmed Karim",
                      plan: "Hypertrophy Program · Week 4",
                      pct: "85%",
                      bar: "bg-gradient-to-r from-[#5A0BFB] to-[#9D66FF]",
                      badge: "On Track",
                      badgeCls: "bg-green-500/15 text-green-400 border-green-500/30",
                      av: "bg-[#5A0BFB]/20 text-[#9D66FF]",
                    },
                    {
                      init: "SM",
                      name: "Sara Mahmoud",
                      plan: "Fat Loss & Conditioning · Week 2",
                      pct: "40%",
                      bar: "bg-blue-500",
                      badge: "Check-in Due",
                      badgeCls: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
                      av: "bg-blue-500/20 text-blue-400",
                    },
                    {
                      init: "OT",
                      name: "Omar Tarek",
                      plan: "Strength & Mobility · Week 1",
                      pct: "95%",
                      bar: "bg-emerald-500",
                      badge: "Program Sent",
                      badgeCls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
                      av: "bg-purple-500/20 text-purple-400",
                    },
                  ].map((c) => (
                    <div
                      key={c.init}
                      className="bg-[#13131A] p-3.5 rounded-xl border border-[#1E1E2E] flex items-center gap-3 hover:border-[#5A0BFB]/40 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${c.av}`}
                      >
                        {c.init}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-xs text-white truncate">
                            {c.name}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 font-medium ${c.badgeCls}`}
                          >
                            {c.badge}
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0A0A0F] rounded-full overflow-hidden mb-1">
                          <div className={`h-full ${c.bar}`} style={{ width: c.pct }} />
                        </div>
                        <p className="text-[10px] text-[#8B8B9E]">{c.plan}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="border-y border-[#1E1E2E] bg-[#0A0A0F]/60 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col gap-1">
                <span className="font-['Cervino'] font-black text-3xl sm:text-4xl text-[#5A0BFB]">
                  50 Coaches
                </span>
                <span className="text-xs text-[#8B8B9E]">Exclusive Pilot Cohort</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Cervino'] font-black text-3xl sm:text-4xl text-white">
                  Cairo & Ismailia
                </span>
                <span className="text-xs text-[#8B8B9E]">Primary Launch Hubs</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Cervino'] font-black text-3xl sm:text-4xl text-[#9D66FF]">
                  Arabic-First
                </span>
                <span className="text-xs text-[#8B8B9E]">Native Language & Workflows</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Cervino'] font-black text-3xl sm:text-4xl text-white">
                  100% Keep
                </span>
                <span className="text-xs text-[#8B8B9E]">Keep Your Direct Earnings</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PROBLEM SECTION ── */}
        <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 block">
              The Problem
            </span>
            <h2 className="font-['Cervino'] font-black text-3xl sm:text-5xl text-white mb-6 leading-tight">
              Coaches are running real businesses with the wrong tools.
            </h2>
            <p className="text-[#8B8B9E] text-base sm:text-lg">
              Personal trainers are forced to glue together generic messaging apps and static files to run their entire business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: MessageCircle,
                iconCls: "text-red-400",
                bgCls: "bg-red-500/10 border-red-500/20",
                title: "WhatsApp Chaos",
                desc: "Workout updates, check-in photos, payment receipts, and schedule changes get buried in endless group chats.",
              },
              {
                icon: FileSpreadsheet,
                iconCls: "text-amber-400",
                bgCls: "bg-amber-500/10 border-amber-500/20",
                title: "Manual Spreadsheets",
                desc: "Tracking client progress across separate Excel sheets. Hard to read on mobile, zero automated insight.",
              },
              {
                icon: LayoutDashboard,
                iconCls: "text-orange-400",
                bgCls: "bg-orange-500/10 border-orange-500/20",
                title: "Disorganized System",
                desc: "No centralized dashboard. No clean workout delivery. PDF files sent over WhatsApp look unprofessional.",
              },
            ].map((p) => (
              <Card
                key={p.title}
                className="bg-[#13131A] border-[#1E1E2E] hover:border-[#5A0BFB]/40 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${p.bgCls}`}
                  >
                    <p.icon className={`w-6 h-6 ${p.iconCls}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#5A0BFB] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#8B8B9E] text-sm leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-[#8B8B9E] max-w-xl mx-auto">
            Coaches waste 4+ hours every week managing administrative chaos instead of coaching.{" "}
            <span className="text-white font-medium">Athletica replaces that chaos.</span>
          </p>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#5A0BFB]/30 to-transparent" />

        {/* ── 3. SOLUTION SECTION (BEFORE / AFTER) ── */}
        <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#5A0BFB] uppercase tracking-widest mb-2 block">
              The Athletica Advantage
            </span>
            <h2 className="font-['Cervino'] font-black text-3xl sm:text-5xl text-white mb-4 leading-tight">
              One platform. Everything you need to run your coaching business.
            </h2>
            <p className="text-[#8B8B9E] text-base sm:text-lg">
              Athletica unifies client management, workout building, and progress tracking into a single sleek application.
            </p>
          </div>

          {/* Grid Before vs After */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Card */}
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-2xl p-8">
              <div className="text-xs font-bold tracking-widest uppercase text-red-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Before Athletica (Traditional Way)
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "💬", label: "WhatsApp Messaging", sub: "Scattered check-ins & buried files" },
                  { icon: "📊", label: "Excel / Sheets", sub: "Manual & non-responsive progress tracking" },
                  { icon: "📄", label: "PDF Workouts", sub: "Hard for clients to execute at the gym" },
                  { icon: "📆", label: "Calendar Apps", sub: "No-shows with zero record or accountability" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 p-3.5 bg-[#0A0A0F]/60 rounded-xl border border-[#1E1E2E] opacity-75"
                  >
                    <span className="text-xl">{row.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white/80 line-through decoration-red-400">
                        {row.label}
                      </div>
                      <div className="text-xs text-[#8B8B9E]">{row.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After Card */}
            <div className="glass-strong border border-[#5A0BFB]/40 rounded-2xl p-8 shadow-[0_0_40px_rgba(90,11,251,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A0BFB]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-xs font-bold tracking-widest uppercase text-[#5A0BFB] mb-6 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#5A0BFB]" />
                After Athletica (The Ultimate Way)
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Users, label: "Client Hub", sub: "See every client's status & progress at a glance" },
                  { icon: Dumbbell, label: "Workout Builder", sub: "Build & assign programs in 1 click" },
                  { icon: LineChart, label: "Progress Logs", sub: "Visual charts for weights, reps, and body metrics" },
                  { icon: Calendar, label: "Smart Scheduling", sub: "Automated session management & check-in alerts" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 p-3.5 bg-[#5A0BFB]/10 rounded-xl border border-[#5A0BFB]/25"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#5A0BFB]/20 flex items-center justify-center shrink-0">
                      <row.icon className="w-4 h-4 text-[#9D66FF]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">{row.label}</div>
                      <div className="text-xs text-[#8B8B9E]">{row.sub}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#5A0BFB] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. FEATURES GRID ── */}
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#5A0BFB] uppercase tracking-widest mb-2 block">
              Core Capabilities
            </span>
            <h2 className="font-['Cervino'] font-black text-3xl sm:text-5xl text-white mb-4 leading-tight">
              Built for how coaches actually work.
            </h2>
            <p className="text-[#8B8B9E] text-base sm:text-lg">
              Designed hand-in-hand with active trainers in Egypt and the MENA region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Client Management",
                desc: "Organize client profiles, medical history, subscription statuses, and goals in one unified list.",
              },
              {
                icon: Dumbbell,
                title: "Workout Programming",
                desc: "Create custom exercise sets, reps, and tempo programs. Deliver interactive workout guides directly to clients.",
              },
              {
                icon: LineChart,
                title: "Progress Tracking",
                desc: "Automate body metric logs, weight progression graphs, and photo check-in comparisons.",
              },
              {
                icon: Calendar,
                title: "Session Scheduling",
                desc: "Manage 1-on-1 sessions, group classes, and client check-in deadlines without back-and-forth messages.",
              },
              {
                icon: MessageSquare,
                title: "Direct Messaging",
                desc: "Keep all client chats organized inside Athletica instead of mixing personal and business WhatsApp chats.",
              },
              {
                icon: BarChart3,
                title: "Coach Analytics",
                desc: "Identify inactive clients who need motivation, track monthly retention, and monitor total revenue.",
              },
            ].map((f) => (
              <Card
                key={f.title}
                className="bg-[#13131A] border-[#1E1E2E] hover:border-[#5A0BFB]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,11,251,0.15)] group"
              >
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-[#5A0BFB]/10 border border-[#5A0BFB]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#5A0BFB]/20 transition-all">
                    <f.icon className="w-6 h-6 text-[#5A0BFB]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#5A0BFB] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[#8B8B9E] text-sm leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 5. PILOT PROGRAM BANNER ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass-strong border border-[#5A0BFB]/40 p-8 sm:p-14 text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5A0BFB] rounded-full blur-[180px] opacity-[0.16] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5A0BFB]/20 border border-[#5A0BFB]/40 text-[#9D66FF] text-xs font-semibold uppercase tracking-wider mb-6">
                Founding Cohort Opportunity
              </span>

              <h2 className="font-['Cervino'] font-black text-3xl sm:text-5xl text-white mb-4 leading-tight">
                We are looking for our first 50 founding coaches.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Be part of the founding group. Shape the product roadmap. Receive priority onboarding and permanent founding perks.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                {[
                  "100% free access throughout the pilot program",
                  "Direct line to the product & engineering team",
                  "Permanent founding coach discount for life",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 text-left bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:max-w-[220px]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5A0BFB] mt-0.5 shrink-0" />
                    <span className="text-xs text-white/90 leading-tight">{point}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-base bg-white text-[#0A0A0F] hover:bg-gray-100 font-bold border-none shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105"
              >
                <a href="#waitlist">
                  Apply for Early Access <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── 6. WAITLIST FORM SECTION ── */}
        <LeadForm />

        {/* ── 7. FAQ SECTION ── */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
