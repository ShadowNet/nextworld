import type { Metadata } from "next";
import { GetRightFooter, GetRightHeader } from "@/components/get-right-shell";

export const metadata: Metadata = {
  title: "Lavish Thrones Support | GET RIGHT",
  description:
    "Contact Lavish Thrones support for booking help, rental questions, delivery and pickup support, account assistance, and app support.",
};

const supportTopics = [
  "Booking Requests",
  "Rental Availability",
  "Delivery & Pickup",
  "Account or App Help",
  "Policy & Privacy Questions",
];

export default function LavishThronesContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#070707] text-[#f8f0df]">
      <GetRightHeader />

      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(195,139,56,.28),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(255,236,191,.12),transparent_26%),linear-gradient(135deg,#060606_0%,#101010_42%,#1b1308_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#d9a34e]/70 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute -right-48 top-12 -z-10 h-[32rem] w-[32rem] rounded-full border border-[#d9a34e]/15"
        />

        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,31rem)] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#d9a34e]">
              Official App Store Support URL
            </p>
            <span className="mt-5 block h-px w-16 bg-[#d9a34e]" />
            <h1 className="mt-8 max-w-4xl text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#fff8ea]">
              Lavish Thrones Support
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dccbad] sm:text-xl">
              Support for luxury rental bookings, delivery, pickup, account access, and app assistance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:getrightorganization7@gmail.com"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d9a34e] px-7 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#11100d] shadow-[0_18px_38px_rgba(217,163,78,.25)] transition hover:bg-[#f1c46d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1c46d]"
              >
                Email Support
              </a>
              <a
                href="tel:4046103472"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d9a34e]/55 px-7 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#f8e2b5] transition hover:border-[#f1c46d] hover:bg-[#f1c46d]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1c46d]"
              >
                Call Support
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-[#d9a34e]/18 bg-[#16110b]/80 p-6 shadow-[0_26px_80px_rgba(0,0,0,.32)] backdrop-blur sm:p-8">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d9a34e]">
              Contact Details
            </p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f927a]">Email</dt>
                <dd className="mt-2">
                  <a
                    href="mailto:getrightorganization7@gmail.com"
                    className="text-lg font-semibold tracking-[-0.02em] text-[#fff8ea] transition hover:text-[#f1c46d]"
                  >
                    getrightorganization7@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f927a]">Phone</dt>
                <dd className="mt-2">
                  <a
                    href="tel:4046103472"
                    className="text-lg font-semibold tracking-[-0.02em] text-[#fff8ea] transition hover:text-[#f1c46d]"
                  >
                    404-610-3472
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#d9a34e]/12 bg-[#100d09] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#d9a34e]">Support</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#fff8ea] sm:text-5xl">
                Help for bookings, rentals, and app access.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d6c6a9]">
                For help with Lavish Thrones bookings, rental questions, delivery or pickup updates, app issues, or account support, contact us below.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {supportTopics.map((topic) => (
                <article
                  key={topic}
                  className="rounded-2xl border border-[#d9a34e]/14 bg-[#fbf3e4] p-5 text-[#17130d] shadow-[0_18px_50px_rgba(0,0,0,.16)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a34e]/16 text-[#a46d22]">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{topic}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-5 py-12 text-[#17212b] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-7 rounded-3xl border border-[#96794c]/16 bg-white p-6 shadow-[0_18px_55px_rgba(58,43,20,.08)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#a97429]">Privacy Policy</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#59636c]">
              Review how Lavish Thrones handles booking inquiries and customer information.
            </p>
          </div>
          <a
            href="https://www.redghyjean.com/get-right/policy#lavish-thrones"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#bd8a40]/60 px-7 text-center text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9a6925] transition hover:bg-[#b7863d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7863d]"
          >
            View Privacy Policy
          </a>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-5 pb-14 text-[#17212b] sm:px-8 lg:px-10">
        <p className="mx-auto max-w-[92rem] text-center text-sm leading-7 text-[#68727b]">
          Lavish Thrones is managed by GET RIGHT. Support requests are reviewed as soon as possible.
        </p>
      </section>

      <GetRightFooter />
    </main>
  );
}
