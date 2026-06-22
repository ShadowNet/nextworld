"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { GetRightFooter, GetRightHeader } from "@/components/get-right-shell";

type PolicySection = {
  heading: string;
  body: string;
};

type PolicyEntry = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  sections: PolicySection[];
};

const policies: PolicyEntry[] = [
  {
    id: "get-right",
    label: "GET RIGHT",
    title: "Clear policies. Straightforward expectations.",
    subtitle: "Our detailed service, privacy, and engagement policies are being prepared and will be available here soon.",
    sections: [],
  },
  {
    id: "lavish-thrones",
    label: "Lavish Thrones",
    title: "Lavish Thrones Privacy & Terms",
    subtitle: "Please review how Lavish Thrones handles booking inquiries and customer information.",
    sections: [
      {
        heading: "Information You Send",
        body: "Lavish Thrones does not create user accounts or permanently store personal information within the app. The only information we receive is information you voluntarily provide through inquiry and contact forms, including your name, email address, phone number, and inquiry message.",
      },
      {
        heading: "Contact & Inquiries",
        body: "When you submit an inquiry, the app prepares an email using the information you provide. You review and send the email from your device before it is delivered to Lavish Thrones. The app does not automatically transmit information without user action.",
      },
      {
        heading: "Booking Use",
        body: "Information submitted through inquiries is used solely to respond to questions, discuss availability, provide event information, confirm booking details, and support customer requests related to Lavish Thrones services.",
      },
      {
        heading: "No In-App Accounts",
        body: "Lavish Thrones does not create user accounts, store payment information, process payments, or maintain customer profiles within the application.",
      },
      {
        heading: "Third-Party Services",
        body: "The application may provide links to external websites, email apps, maps, social media platforms, or other third-party services. Lavish Thrones is not responsible for the privacy practices of third-party services.",
      },
      {
        heading: "Policy Updates",
        body: "This policy may be updated periodically. Continued use of the application after updates constitutes acceptance of the revised policy.",
      },
      {
        heading: "Contact Us",
        body: "For questions about this policy or customer inquiries, contact Lavish Thrones using the contact information provided in the application.",
      },
    ],
  },
];

function isPolicyId(value: string): value is string {
  return policies.some((policy) => policy.id === value);
}

export function GetRightPolicyHub() {
  const [activeId, setActiveId] = useState("get-right");
  const reducedMotion = Boolean(useReducedMotion());
  const activePolicy = policies.find((policy) => policy.id === activeId) ?? policies[0];

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.slice(1);
      if (!isPolicyId(hash)) return;

      requestAnimationFrame(() => {
        setActiveId(hash);
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ block: "start" });
        });
      });
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function selectPolicy(id: string) {
    setActiveId(id);
    window.history.replaceState(null, "", `${window.location.pathname}#${id}`);
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbf8f1] text-[#17212b]">
      <GetRightHeader />

      <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="pointer-events-none absolute -right-36 -top-20 h-[34rem] w-[34rem] rounded-full border border-[#bd8736]/12" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(198,148,68,.13),transparent_25%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[92rem]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[#a97429]">Policy Hub</p>
          <span className="mt-4 block h-px w-16 bg-[#bd8736]" />
          <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#17222d]">Policies by brand.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#58626b]">Select a GET RIGHT business or application to review its current privacy and service terms.</p>

          {policies.map((policy) => <span key={policy.id} id={policy.id} className="block scroll-mt-24" aria-hidden="true" />)}

          <nav aria-label="Choose a policy" className="mt-10 grid max-w-2xl gap-2 rounded-xl border border-[#987b50]/15 bg-white/65 p-2 shadow-[0_16px_45px_rgba(59,45,26,.07)] backdrop-blur sm:grid-cols-2">
            {policies.map((policy) => {
              const active = policy.id === activeId;
              return (
                <button
                  key={policy.id}
                  type="button"
                  aria-pressed={active}
                  aria-controls={`policy-panel-${policy.id}`}
                  onClick={() => selectPolicy(policy.id)}
                  className={`flex min-h-12 items-center justify-between rounded-lg px-5 text-left text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a97429] ${
                    active ? "bg-[#b98538] text-white shadow-[0_8px_22px_rgba(161,111,38,.18)]" : "text-[#39444e] hover:bg-[#b98538]/9 hover:text-[#9f6c25]"
                  }`}
                >
                  {policy.label}
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${active ? "bg-white" : "bg-[#bc8737]/45"}`} />
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="border-y border-[#78684f]/12 bg-[#f5f0e8] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[92rem]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activePolicy.id}
              id={`policy-panel-${activePolicy.id}`}
              role="region"
              aria-labelledby={`policy-title-${activePolicy.id}`}
              className="scroll-mt-24 rounded-xl border border-[#8d7653]/15 bg-white p-7 shadow-[0_18px_50px_rgba(54,43,28,.07)] sm:p-10 lg:p-14"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reducedMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <div className="max-w-4xl">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[#a97429]">{activePolicy.label}</p>
                <h2 id={`policy-title-${activePolicy.id}`} className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#17222d] sm:text-5xl">{activePolicy.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#59636c] sm:text-lg">{activePolicy.subtitle}</p>
              </div>

              {activePolicy.sections.length > 0 && (
                <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[#78684f]/12 bg-[#78684f]/10 lg:grid-cols-2">
                  {activePolicy.sections.map((section) => (
                    <section key={section.heading} className="bg-[#fffdf9] p-6 sm:p-8">
                      <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#202b35]">{section.heading}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5a646d]">{section.body}</p>
                    </section>
                  ))}
                </div>
              )}
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <GetRightFooter />
    </main>
  );
}
