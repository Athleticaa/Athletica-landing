import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { first: "A", rest: "ll" },
  { first: "T", rest: "hat" },
  { first: "H", rest: "ard" },
  { first: "L", rest: "abor" },
  { first: "E", rest: "arns" },
  { first: "T", rest: "rue" },
  { first: "I", rest: "mpact," },
  { first: "C", rest: "rafting" },
  { first: "A", rest: "thletes." },
];

const LINE_SPACING = 64;
const LETTER_START_Y = LINES.map((_, i) => (i - 4) * LINE_SPACING);

type Phase = "lines" | "focus" | "assemble" | "logo";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("lines");
  const [linesVisible, setLinesVisible] = useState(0);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem("athletica_intro_shown", "true");
    } catch {
      // Ignore sessionStorage restriction if any
    }
    setVisible(false);
    onComplete();
  }, [onComplete]);

  // Check if intro was already played in this session
  useEffect(() => {
    try {
      if (sessionStorage.getItem("athletica_intro_shown") === "true") {
        setVisible(false);
        onComplete();
      }
    } catch {
      // Ignore
    }
  }, [onComplete]);

  // Listen for Escape key to skip
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        finishIntro();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finishIntro]);

  const advance = useCallback((to: Phase, delay: number) => {
    const t = setTimeout(() => setPhase(to), delay);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (phase !== "lines") return;
    if (linesVisible >= LINES.length) return advance("focus", 500);
    const t = setTimeout(() => setLinesVisible((c) => c + 1), 280);
    return () => clearTimeout(t);
  }, [phase, linesVisible, advance, visible]);

  useEffect(() => {
    if (!visible) return;
    if (phase === "focus") return advance("assemble", 650);
    if (phase === "assemble") return advance("logo", 900);
    if (phase === "logo") {
      const t = setTimeout(() => {
        finishIntro();
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [phase, advance, finishIntro, visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        className="fixed inset-0 z-[100] bg-[#0A0A0F] flex items-center justify-center overflow-hidden select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Glow Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5A0BFB] rounded-full blur-[200px] opacity-[0.12] pointer-events-none" />

        {/* Skip button */}
        <motion.button
          onClick={finishIntro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          whileHover={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 right-8 text-xs text-white/50 hover:text-white transition-colors tracking-[0.2em] uppercase font-mono px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          Skip Intro →
        </motion.button>

        {/* ── PHASE: lines + focus ── */}
        <motion.div
          className="flex flex-col items-start px-6"
          animate={
            phase === "assemble" || phase === "logo"
              ? { opacity: 0, scale: 0.95 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          {LINES.map((line, i) => (
            <div key={i} className="flex items-baseline overflow-hidden leading-[1.05]">
              <motion.span
                className="font-['Cervino'] font-black text-[clamp(36px,5.5vw,76px)]"
                animate={{
                  opacity: linesVisible > i ? 1 : 0,
                  y: linesVisible > i ? 0 : 16,
                  color: phase === "focus" ? "#5A0BFB" : "#ffffff",
                  textShadow:
                    phase === "focus"
                      ? "0 0 40px rgba(90,11,251,0.9)"
                      : "0 0 0px transparent",
                }}
                transition={{
                  opacity: { duration: 0.35 },
                  y: { duration: 0.4, ease: "easeOut" },
                  color: { duration: 0.45 },
                  textShadow: { duration: 0.45 },
                }}
              >
                {line.first}
              </motion.span>
              <motion.span
                className="font-['Cervino'] font-black text-[clamp(36px,5.5vw,76px)] text-white/80 ml-[0.02em]"
                animate={{
                  opacity: linesVisible > i ? (phase === "focus" ? 0 : 1) : 0,
                  x: phase === "focus" ? 10 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {line.rest}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* ── PHASE: assemble ── */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={
            phase === "assemble" || phase === "logo"
              ? { opacity: phase === "logo" ? 0 : 1 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          {"ATHLETICA".split("").map((letter, i) => (
            <motion.span
              key={i}
              className="font-['Cervino'] font-black text-[clamp(42px,7vw,90px)] leading-none"
              style={{ color: "#5A0BFB" }}
              initial={{ opacity: 0, y: LETTER_START_Y[i], scale: 0.7 }}
              animate={
                phase === "assemble" || phase === "logo"
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: LETTER_START_Y[i], scale: 0.7 }
              }
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.04,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* ── PHASE: logo ── */}
        <motion.div
          className="absolute flex flex-col items-center gap-4 text-center px-4"
          animate={phase === "logo" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="/images/athletica.svg"
            alt="Athletica"
            className="w-20 h-20 sm:w-28 sm:h-28 filter drop-shadow-[0_0_25px_rgba(90,11,251,0.6)]"
          />
          <span className="font-['Cervino'] font-black text-[clamp(42px,7vw,88px)] leading-none tracking-[0.08em] text-white">
            ATHLETICA
          </span>
          <motion.span
            className="text-[#8B8B9E] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium max-w-md"
            initial={{ opacity: 0, y: 6 }}
            animate={phase === "logo" ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Where Fitness Coaches Build Real Businesses.
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
