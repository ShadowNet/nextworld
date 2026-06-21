"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { GetRightFooter, GetRightHeader } from "@/components/get-right-shell";

type ServiceKind = "app-development" | "customer-experience";

type ServiceContent = {
  eyebrow: string;
  heading: string;
  copy: string;
  primaryLabel: string;
  overviewHeading: string;
  overviewCopy: string;
  values: string[];
  workHeading: string;
  workCards: { title: string; description: string }[];
  processHeading: string;
  process: { title: string; description: string }[];
  capabilityHeading: string;
  capabilities: string[];
  deliverables: string[];
  ctaHeading: string;
  ctaCopy: string;
};

const content: Record<ServiceKind, ServiceContent> = {
  "app-development": {
    eyebrow: "App Development",
    heading: "Beautiful applications. Built to perform.",
    copy: "We design and develop scalable mobile and web applications that combine thoughtful user experiences, reliable engineering, and measurable business value.",
    primaryLabel: "Start a project",
    overviewHeading: "From idea to launch.",
    overviewCopy: "We turn early concepts into polished digital products through product strategy, user-centered design, modern engineering, testing, and long-term support.",
    values: ["Product Strategy", "Experience Design", "Engineering Excellence"],
    workHeading: "Applications designed around real goals.",
    workCards: [
      { title: "iOS Applications", description: "Native Apple experiences designed for performance, quality, and long-term maintainability." },
      { title: "Android Applications", description: "Reliable mobile experiences built for a wide range of devices and users." },
      { title: "Cross-Platform Products", description: "Efficient shared-code solutions for brands that need to move quickly across platforms." },
      { title: "Web Applications", description: "Responsive, scalable web products designed for modern workflows and customer experiences." },
    ],
    processHeading: "A clear process from concept to release.",
    process: [
      { title: "Discovery", description: "We define the problem, audience, goals, requirements, and measures of success." },
      { title: "Strategy", description: "We establish the product direction, scope, roadmap, and technical approach." },
      { title: "Design", description: "We create user flows, wireframes, visual systems, and interactive prototypes." },
      { title: "Development", description: "We build, test, integrate, and refine the product using modern engineering practices." },
      { title: "Launch and Support", description: "We prepare the product for release and support its continued growth after launch." },
    ],
    capabilityHeading: "Built with quality at every layer.",
    capabilities: [
      "Native iOS development", "Android development", "Cross-platform development", "Responsive web applications",
      "API integration", "Backend integration", "Accessibility", "Analytics", "Automated testing", "App Store preparation",
      "Performance optimization", "Ongoing maintenance",
    ],
    deliverables: [
      "Product requirements and roadmap", "User flows and wireframes", "High-fidelity interface designs",
      "Interactive prototypes", "Production-ready application code", "Testing and release preparation",
      "Technical documentation", "Post-launch recommendations",
    ],
    ctaHeading: "Ready to build the right product?",
    ctaCopy: "Tell us what you are creating, where you are in the process, and what success looks like.",
  },
  "customer-experience": {
    eyebrow: "Customer Experience",
    heading: "Experiences people remember for the right reasons.",
    copy: "We improve the complete customer journey by combining research, strategy, thoughtful design, and continuous optimization.",
    primaryLabel: "Improve your experience",
    overviewHeading: "Every interaction shapes the relationship.",
    overviewCopy: "We help brands understand what customers need, identify friction, and design more useful, consistent, and satisfying experiences across every touchpoint.",
    values: ["Customer Insight", "Journey Optimization", "Lasting Loyalty"],
    workHeading: "Better experiences across the entire journey.",
    workCards: [
      { title: "Customer Journey Strategy", description: "Map the full experience, identify gaps, and prioritize the improvements that matter most." },
      { title: "Digital Experience Design", description: "Create intuitive websites and applications that help customers complete their goals confidently." },
      { title: "Service Experience", description: "Improve the systems, communication, and processes supporting customer interactions." },
      { title: "Experience Optimization", description: "Use research, feedback, analytics, and testing to continuously improve results." },
    ],
    processHeading: "Understand. Design. Improve.",
    process: [
      { title: "Discover", description: "Review the current experience, business goals, customer feedback, and available data." },
      { title: "Research", description: "Learn what customers need, expect, value, and find frustrating." },
      { title: "Map", description: "Create customer journeys and identify important moments, gaps, and opportunities." },
      { title: "Design", description: "Develop improved interactions, workflows, interfaces, and service recommendations." },
      { title: "Measure", description: "Track satisfaction, usability, conversion, retention, and other meaningful outcomes." },
    ],
    capabilityHeading: "Designed to create measurable improvement.",
    capabilities: [
      "Higher customer satisfaction", "Clearer digital journeys", "Reduced customer friction", "Improved conversion",
      "Stronger retention", "More consistent brand experiences", "Better service workflows", "Actionable customer insight",
    ],
    deliverables: [
      "Customer journey maps", "Experience assessments", "Research findings", "Opportunity prioritization", "User flows",
      "Interface recommendations", "Service-design recommendations", "Measurement framework", "Optimization roadmap",
    ],
    ctaHeading: "Let’s create an experience worth returning to.",
    ctaCopy: "Tell us where your customers are struggling and what you want the experience to become.",
  },
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
}

function CardIcon({ index, experience }: { index: number; experience: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4">
      {experience ? (
        index % 2 === 0
          ? <><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="7" r="2.5" /><circle cx="19" cy="17" r="2.5" /><path d="M7.5 11.5 16.5 7.6M7.5 12.5l9 3.9" /></>
          : <><path d="M4 18V9M10 18V5M16 18v-6M22 18V3" /><path d="M2 18h22" /></>
      ) : (
        index % 2 === 0
          ? <><rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M10 5h4M10 18.5h4" /></>
          : <><path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" /></>
      )}
    </svg>
  );
}

function AppDevelopmentVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[38rem]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-[2rem] bg-[radial-gradient(circle_at_65%_28%,rgba(214,166,91,.34),transparent_34%),linear-gradient(145deg,#fffdf8,#eae0d0)] shadow-[0_35px_80px_rgba(79,60,31,.16)]" />
      <motion.div className="absolute left-[12%] top-[15%] h-[72%] w-[38%] rounded-[2rem] border-[6px] border-[#202b34] bg-[#fbf8f1] p-3 shadow-2xl" animate={reducedMotion ? undefined : { y: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-[#202b34]/25" />
        <div className="rounded-xl bg-[#c69342] p-4"><div className="h-2 w-12 rounded bg-white/70" /><div className="mt-2 h-2 w-20 rounded bg-white/35" /></div>
        <div className="mt-3 grid grid-cols-2 gap-2"><span className="h-16 rounded-lg bg-[#e7dfd1]" /><span className="h-16 rounded-lg bg-[#f1eadf]" /></div>
        <div className="mt-3 h-24 rounded-lg border border-[#a9916c]/15 bg-white" />
      </motion.div>
      <motion.div className="absolute right-[6%] top-[24%] w-[52%] rounded-xl border border-[#9f865f]/18 bg-white/90 p-5 shadow-[0_20px_45px_rgba(65,52,34,.14)] backdrop-blur" animate={reducedMotion ? undefined : { x: [0, 5, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a8752b]">Build system</span><span className="h-2 w-2 rounded-full bg-[#c8933f]" /></div>
        <div className="mt-5 space-y-3"><span className="block h-2 w-full rounded bg-[#28323b]/9" /><span className="block h-2 w-4/5 rounded bg-[#28323b]/9" /><span className="block h-2 w-2/3 rounded bg-[#c8933f]/25" /></div>
        <div className="mt-6 flex gap-2 font-mono text-xl text-[#a8752b]"><span>&lt;</span><span className="flex-1 border-b border-[#b99a6e]/25" /><span>/&gt;</span></div>
      </motion.div>
    </div>
  );
}

function CustomerExperienceVisual({ reducedMotion }: { reducedMotion: boolean }) {
  const points = [{ x: "12%", y: "58%" }, { x: "35%", y: "28%" }, { x: "61%", y: "51%" }, { x: "84%", y: "22%" }];
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[38rem] overflow-hidden rounded-[2rem] border border-[#a98e66]/15 bg-[radial-gradient(circle_at_75%_22%,rgba(211,162,82,.3),transparent_28%),linear-gradient(145deg,#fffdf8,#eae0d1)] shadow-[0_35px_80px_rgba(79,60,31,.15)]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-2xl border border-[#b79664]/18 bg-white/55 backdrop-blur-sm" />
      <svg viewBox="0 0 100 60" className="absolute inset-x-[8%] top-[20%] h-[55%] w-[84%]" fill="none">
        <motion.path d="M8 40 C22 40 22 15 36 15 S52 35 62 35 75 10 92 10" stroke="#bd8736" strokeWidth="1.2" strokeDasharray="3 3" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 1.4, ease: "easeOut" }} />
      </svg>
      {points.map((point, index) => (
        <motion.span key={point.x} className="absolute grid h-11 w-11 place-items-center rounded-full border border-[#c28d3d]/35 bg-[#fffaf1] text-xs font-semibold text-[#a8752b] shadow-lg" style={{ left: point.x, top: point.y }} animate={reducedMotion ? undefined : { x: [0, index % 2 ? 3 : -3, 0] }} transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}>
          0{index + 1}
        </motion.span>
      ))}
      <div className="absolute bottom-[9%] left-[12%] right-[12%] flex justify-between text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-[#687078]"><span>Discover</span><span>Connect</span><span>Return</span></div>
    </div>
  );
}

function ServicePageHero({ kind, data, reducedMotion }: { kind: ServiceKind; data: ServiceContent; reducedMotion: boolean }) {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f1] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#c99645]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-[92rem] items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.65 }}>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[#a97429]">{data.eyebrow}</p>
          <span className="mt-4 block h-px w-16 bg-[#bd8736]" />
          <h1 className="mt-7 max-w-3xl text-[clamp(3.1rem,6vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#17222d]">{data.heading}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#56606a] sm:text-lg">{data.copy}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="group inline-flex min-h-12 items-center justify-center gap-4 bg-[#c18c3d] px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#17212b] transition hover:-translate-y-0.5 hover:bg-[#d2a156] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">{data.primaryLabel}<ArrowIcon /></a>
            <Link href="/get-right#services" className="inline-flex min-h-12 items-center justify-center gap-4 border border-[#a98555]/55 bg-white/40 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#26313b] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">View services<ArrowIcon /></Link>
          </div>
        </motion.div>
        {kind === "app-development" ? <AppDevelopmentVisual reducedMotion={reducedMotion} /> : <CustomerExperienceVisual reducedMotion={reducedMotion} />}
      </div>
    </section>
  );
}

function ServiceOverview({ data }: { data: ServiceContent }) {
  return (
    <section className="border-y border-[#78684f]/12 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#a97429]">Overview</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#17222d] sm:text-5xl">{data.overviewHeading}</h2></div>
        <div><p className="max-w-3xl text-lg leading-8 text-[#58626b]">{data.overviewCopy}</p><div className="mt-9 grid gap-3 sm:grid-cols-3">{data.values.map((value) => <div key={value} className="border-l-2 border-[#c18c3d] bg-[#faf6ef] px-5 py-4 text-sm font-semibold text-[#27323c]">{value}</div>)}</div></div>
      </div>
    </section>
  );
}

function WorkSection({ data, experience, reducedMotion }: { data: ServiceContent; experience: boolean; reducedMotion: boolean }) {
  return (
    <section className="bg-[#f7f3ec] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[92rem]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#a97429]">What we {experience ? "improve" : "build"}</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#17222d] sm:text-5xl">{data.workHeading}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{data.workCards.map((card, index) => <motion.article key={card.title} className="rounded-lg border border-[#78684f]/12 bg-white p-7 shadow-[0_12px_34px_rgba(54,45,32,.05)]" initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.06 }}><span className="grid h-12 w-12 place-items-center rounded-full bg-[#c18c3d]/12 text-[#ad772d]"><CardIcon index={index} experience={experience} /></span><h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#1d2832]">{card.title}</h3><p className="mt-3 text-sm leading-6 text-[#5a646c]">{card.description}</p></motion.article>)}</div>
      </div>
    </section>
  );
}

function ServiceProcess({ data, reducedMotion }: { data: ServiceContent; reducedMotion: boolean }) {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[92rem]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#a97429]">Our process</p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#17222d] sm:text-5xl">{data.processHeading}</h2>
        <ol className="relative mt-12 grid gap-7 border-l border-[#bd8736]/35 pl-7 md:grid-cols-5 md:gap-4 md:border-l-0 md:border-t md:pl-0 md:pt-8">{data.process.map((step, index) => <motion.li key={step.title} className="relative md:px-3" initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : index * 0.07 }}><span className="absolute -left-[2.08rem] top-1 grid h-5 w-5 place-items-center rounded-full bg-[#c18c3d] text-[0.55rem] font-bold text-white md:-top-[2.72rem] md:left-3">{index + 1}</span><h3 className="text-lg font-semibold text-[#1d2832]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#5b656d]">{step.description}</p></motion.li>)}</ol>
      </div>
    </section>
  );
}

function CapabilityAndDeliverables({ data }: { data: ServiceContent }) {
  return (
    <section className="border-y border-[#78684f]/12 bg-[#f7f3ec] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[92rem] gap-16 xl:grid-cols-[1.25fr_.75fr]">
        <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#a97429]">Capabilities</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#17222d] sm:text-5xl">{data.capabilityHeading}</h2><div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#78684f]/12 bg-[#78684f]/10 sm:grid-cols-2 lg:grid-cols-3">{data.capabilities.map((item) => <div key={item} className="flex min-h-16 items-center gap-3 bg-white px-5 py-4 text-sm text-[#36414a]"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c18c3d]" />{item}</div>)}</div></div>
        <div className="rounded-xl border border-[#9e8258]/15 bg-white p-7 shadow-[0_16px_40px_rgba(56,45,29,.06)] sm:p-9"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#a97429]">Deliverables</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17222d]">What you receive.</h2><ul className="mt-7 space-y-4">{data.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#53606a]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c18c3d]" />{item}</li>)}</ul></div>
      </div>
    </section>
  );
}

function ServiceCTA({ data }: { data: ServiceContent }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#fbf8f1] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto flex max-w-[92rem] flex-col justify-between gap-10 rounded-xl border border-[#a88653]/20 bg-[linear-gradient(125deg,#fffdf8,#eee3d2)] p-8 shadow-[0_20px_55px_rgba(65,50,28,.08)] sm:p-12 lg:flex-row lg:items-end">
        <div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#a97429]">Start a conversation</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#17222d] sm:text-5xl">{data.ctaHeading}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-[#58626b]">{data.ctaCopy}</p></div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row"><a href="mailto:getrightorganization7@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-4 bg-[#c18c3d] px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#17212b] transition hover:bg-[#d2a156] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">Start a conversation<ArrowIcon /></a><Link href="/get-right" className="inline-flex min-h-12 items-center justify-center border border-[#a98555]/55 bg-white/45 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#26313b] transition hover:bg-white">Back to Get Right</Link></div>
      </div>
    </section>
  );
}

export function GetRightServicePage({ kind }: { kind: ServiceKind }) {
  const data = content[kind];
  const reducedMotion = Boolean(useReducedMotion());
  const experience = kind === "customer-experience";

  return (
    <main className="overflow-x-clip bg-[#fbf8f1] text-[#17212b]">
      <GetRightHeader />
      <ServicePageHero kind={kind} data={data} reducedMotion={reducedMotion} />
      <ServiceOverview data={data} />
      <WorkSection data={data} experience={experience} reducedMotion={reducedMotion} />
      <ServiceProcess data={data} reducedMotion={reducedMotion} />
      <CapabilityAndDeliverables data={data} />
      <ServiceCTA data={data} />
      <GetRightFooter />
    </main>
  );
}
