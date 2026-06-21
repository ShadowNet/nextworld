"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { GetRightFooter, GetRightHeader } from "@/components/get-right-shell";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  linkLabel?: string;
};

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8" r="3" /><circle cx="16.5" cy="9" r="2.5" />
      <path d="M3.5 19c.4-4.2 2.3-6.2 5.5-6.2s5.1 2 5.5 6.2M14 14c3.5-.6 5.7 1.1 6.3 5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m8.5 5-6 7 6 7M15.5 5l6 7-6 7M14 3l-4 18" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Consultation",
    description: "We align strategy, technology, and execution to validate ideas and unlock the right opportunities.",
    icon: <CompassIcon />,
    href: "mailto:getrightorganization7@gmail.com",
    linkLabel: "Inquire",
  },
  {
    title: "App Development",
    description: "Beautiful, scalable, and secure applications crafted with modern technology and engineering best practices.",
    icon: <CodeIcon />,
    href: "/get-right/app-development",
  },
  {
    title: "Customer Experience",
    description: "We design and optimize experiences that delight users, improve satisfaction, and build lasting loyalty.",
    icon: <StarIcon />,
    href: "/get-right/customer-experience",
  },
];

function HeroVideo() {
  const [failed, setFailed] = useState(false);
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <div className="relative min-h-[22rem] overflow-hidden bg-[linear-gradient(135deg,#d8c5a8,#2b302f)] lg:min-h-[45rem]">
      {reducedMotion ? (
        <Image src="/get-right-poster.jpg" alt="A premium digital consultation in progress" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-center" />
      ) : !failed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="/get-right-poster.jpg"
          disablePictureInPicture
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          <source src="/get-right-loop.mp4" type="video/mp4" />
        </video>
      ) : null}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#fbf8f1] via-[#fbf8f1]/55 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fbf8f1]/60 to-transparent lg:hidden" />
    </div>
  );
}

function StatsBar() {
  const stats = [
    { value: "12+", label: "Years of Experience", icon: <PeopleIcon /> },
    { value: "97%", label: "Customer Satisfaction", icon: <TrendIcon /> },
  ];

  return (
    <motion.aside
      aria-label="Company results"
      className="relative z-30 mx-4 -mt-4 grid overflow-hidden rounded-xl border border-[#8a7351]/15 bg-white/95 shadow-[0_18px_55px_rgba(46,38,27,.13)] backdrop-blur-xl sm:mx-8 sm:grid-cols-2 sm:divide-x sm:divide-[#28323c]/10 lg:absolute lg:-bottom-14 lg:left-[34%] lg:right-[6%] lg:mx-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-4 border-b border-[#28323c]/10 px-6 py-5 last:border-b-0 sm:border-b-0 lg:px-8 lg:py-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c8933f] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.35)]">
            {stat.icon}
          </span>
          <div>
            <p className="text-3xl font-semibold leading-none tracking-[-0.05em] text-[#17212b]">{stat.value}</p>
            <p className="mt-1.5 text-sm text-[#56606a]">{stat.label}</p>
          </div>
        </div>
      ))}
    </motion.aside>
  );
}

function GetRightHero() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section className="relative bg-[#fbf8f1]">
      <div className="overflow-hidden">
        <div className="grid lg:min-h-[45rem] lg:grid-cols-[45%_55%]">
          <div className="relative flex items-center overflow-hidden px-[6vw] py-20 sm:py-24 lg:px-[5vw] lg:py-20 xl:px-[6vw]">
            <div aria-hidden="true" className="pointer-events-none absolute -left-1 -top-1 hidden whitespace-nowrap text-[clamp(4.75rem,8vw,11rem)] font-semibold leading-none tracking-[0.035em] text-[#bc9456]/10 lg:block">
              GET RIGHT
            </div>

            <motion.div
              className="relative z-10 max-w-[39rem]"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-[#a97429]">
                <span>Premium digital solutions</span>
              </div>
              <span className="mt-4 block h-px w-16 bg-[#bf8a3a]" />

              <h1 className="mt-7 text-[clamp(3rem,5.1vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[#16212d]">
                Build the right<br />thing. Beautifully<span className="text-[#bd8736]">.</span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-base leading-7 text-[#4f5963] sm:text-[1.05rem]">
                We help ambitious companies turn ideas into exceptional digital products. Strategy, design, and engineering—aligned to deliver measurable results.
              </p>

              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.18 }}
              >
                <a href="#services" className="group inline-flex items-center justify-center gap-5 bg-[#c18c3d] px-6 py-4 text-[0.69rem] font-semibold uppercase tracking-[0.18em] text-[#151d25] shadow-[0_10px_24px_rgba(183,127,47,.19)] transition hover:-translate-y-0.5 hover:bg-[#d1a056] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">
                  Explore services <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#services" className="group inline-flex items-center justify-center gap-5 border border-[#ae8651]/60 bg-[#fffdf9]/50 px-6 py-4 text-[0.69rem] font-semibold uppercase tracking-[0.18em] text-[#1e2a35] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">
                  View our work <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

            </motion.div>
          </div>

          <HeroVideo />
        </div>
      </div>
      <StatsBar />
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <motion.article
      className="group flex min-h-[18rem] flex-col rounded-lg border border-[#776950]/12 bg-white/90 p-7 shadow-[0_12px_35px_rgba(54,45,32,.055)] transition duration-300 hover:-translate-y-1 hover:border-[#bd8a40]/40 hover:shadow-[0_18px_42px_rgba(54,45,32,.09)]"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : index * 0.08 }}
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#c6913d]/12 text-[#bc8533]">{service.icon}</span>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#18232e]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#58616a]">{service.description}</p>
      <a href={service.href} className="mt-auto flex items-center gap-3 pt-7 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#ae7528] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7863d]">
        {service.linkLabel ?? "Learn more"} <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </motion.article>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f8f5ef] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[.31fr_.69fr] lg:gap-10 xl:gap-14">
        <div className="lg:pt-5">
          <div className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#a97429]">
            <span>What we do</span><span className="h-px w-12 bg-[#bf8a3a]" />
          </div>
          <h2 className="mt-7 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#17222d] sm:text-4xl">
            End-to-end digital solutions<br className="hidden xl:block" /> that drive real impact<span className="text-[#bd8736]">.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#5b646c]">
            From strategy to launch, we create thoughtful digital products that help brands grow, operate better, and deliver stronger customer experiences.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>
      </div>
    </section>
  );
}

export function GetRightPage() {
  return (
    <main className="overflow-x-clip bg-[#fbf8f1] text-[#17212b]">
      <GetRightHeader />
      <GetRightHero />
      <ServicesSection />
      <GetRightFooter />
    </main>
  );
}
