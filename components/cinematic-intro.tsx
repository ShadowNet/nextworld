"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BrandDropdownMenu } from "@/components/brand-dropdown-menu";
import { SkipIntroButton } from "@/components/skip-intro-button";

function ResumeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.4">
      <path d="M8.5 3.5h10l5 5v20h-15z" />
      <path d="M18.5 3.5v5h5M12 15h8M12 20h8" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.25">
      <path d="m6 11 5 4 5-9 5 9 5-4-2 14H8z" />
      <path d="M11 20c2.5-2 7.5-2 10 0M9 25h14" />
      <circle cx="6" cy="9" r="1.4" /><circle cx="16" cy="4" r="1.4" /><circle cx="26" cy="9" r="1.4" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.35">
      <circle cx="16" cy="10" r="5" />
      <path d="M6.5 28c.7-7 4-10 9.5-10s8.8 3 9.5 10" />
    </svg>
  );
}

const menu: { href: string; label: string; icon: ReactNode; featured?: boolean }[] = [
  { href: "/resume", label: "Resume", icon: <ResumeIcon /> },
  { href: "/get-right", label: "Get Right", icon: <CrownIcon />, featured: true },
  { href: "/about", label: "About", icon: <AboutIcon /> },
];

const mistLayers = [
  { top: "8%", height: "22%", opacity: 0.1, blur: 28, duration: 128, direction: 1, scale: 1.04 },
  { top: "34%", height: "25%", opacity: 0.13, blur: 21, duration: 86, direction: -1, scale: 1.08 },
  { top: "56%", height: "24%", opacity: 0.16, blur: 16, duration: 74, direction: 1, scale: 1.12 },
  { top: "72%", height: "27%", opacity: 0.2, blur: 12, duration: 52, direction: -1, scale: 1.16 },
] as const;

function AtmosphericMist({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden="true">
      {mistLayers.map((layer) => (
        <motion.div
          key={layer.top}
          className="atmospheric-mist absolute -left-[18%] w-[136%]"
          style={{
            top: layer.top,
            height: layer.height,
            opacity: layer.opacity,
            filter: `blur(${layer.blur}px)`,
            scale: layer.scale,
          }}
          animate={
            reducedMotion
              ? undefined
              : { x: layer.direction > 0 ? [-36, 36] : [36, -36] }
          }
          transition={{ duration: layer.duration, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        />
      ))}
    </div>
  );
}

export function CinematicIntro() {
  const [introEnded, setIntroEnded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [useFinalStill, setUseFinalStill] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);
  const showFinalState = reducedMotion || introEnded;
  const showFallbackImage = reducedMotion || videoFailed || useFinalStill;

  useEffect(() => {
    if (!reducedMotion) return;

    const video = introVideoRef.current;
    if (video) {
      video.pause();
      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.max(0, video.duration - 0.05);
      }
    }
  }, [reducedMotion]);

  function handleLoadedMetadata() {
    if (!reducedMotion) return;

    const video = introVideoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = Math.max(0, video.duration - 0.05);
  }

  function completeIntro(showStill = false) {
    if (showStill) {
      const video = introVideoRef.current;
      video?.pause();

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        // Land on the final encoded frame while keeping the same video
        // element mounted and visible. The source is 24fps.
        video.currentTime = Math.max(0, video.duration - 1 / 24);
      } else {
        setUseFinalStill(true);
      }
    }
    setIntroEnded(true);
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#10151a]">
      <section className="relative h-[100svh] min-h-[38rem] overflow-hidden" aria-label="Cinematic introduction">
        <Image
          src="/hero-final.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${showFallbackImage ? "opacity-100" : "opacity-0"}`}
        />

        <video
          ref={introVideoRef}
          className={`absolute inset-0 z-[1] h-full w-full object-cover ${showFallbackImage ? "opacity-0" : "opacity-100"}`}
          autoPlay={!reducedMotion}
          muted
          playsInline
          preload="auto"
          loop={false}
          onLoadedMetadata={handleLoadedMetadata}
          onSeeked={() => {
            if (introEnded) introVideoRef.current?.pause();
          }}
          onEnded={() => completeIntro()}
          onError={() => {
            setVideoFailed(true);
            completeIntro();
          }}
          aria-hidden="true"
        >
          <source src="/hero-intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute left-[max(1.25rem,3vw)] top-[max(1rem,2.5vw)] z-[60]">
          <BrandDropdownMenu
            label="REDGHY"
            tone="dark"
            triggerClassName="text-sm font-semibold tracking-[0.32em] text-[#f0ce8a] [text-shadow:0_2px_14px_rgba(0,0,0,.35)] sm:text-base"
          />
        </div>

        <div className="absolute right-[max(1.25rem,3vw)] top-[max(1.25rem,2.5vw)] z-[55]">
          <AnimatePresence>
            {!showFinalState && !reducedMotion && (
              <SkipIntroButton key="skip-intro" onSkip={() => completeIntro(true)} />
            )}
          </AnimatePresence>
        </div>

        {showFinalState && <AtmosphericMist reducedMotion={reducedMotion} />}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[32%] bg-gradient-to-t from-[#06090d]/65 to-transparent" aria-hidden="true" />

        {showFinalState && (
          <motion.nav
            aria-label="Primary"
            className="absolute inset-x-0 bottom-[max(1.25rem,4.5vh)] z-30 mx-auto grid w-[min(92vw,72rem)] grid-cols-3 gap-3 sm:gap-5"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.75, ease: "easeOut" }}
          >
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex min-h-16 items-center justify-center gap-2 rounded-xl border px-3 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md transition duration-300 sm:min-h-20 sm:gap-5 sm:text-sm sm:tracking-[0.3em] ${
                  item.featured
                    ? "border-[#e5b75d] bg-[#171614]/55 text-[#f3c96f] shadow-[0_0_35px_rgba(224,174,83,0.12)] hover:bg-[#b58231]/25"
                    : "border-white/35 bg-[#15191d]/35 hover:border-[#e4bc72]/75 hover:text-[#f2cc81]"
                }`}
              >
                <span className="hidden transition-transform duration-300 group-hover:-translate-y-0.5 sm:block">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.nav>
        )}
      </section>
    </main>
  );
}
