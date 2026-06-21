import Link from "next/link";
import { GetRightFooter, GetRightHeader } from "@/components/get-right-shell";

type GetRightBaselinePageProps = {
  eyebrow: "Policy" | "Catalog";
  heading: string;
  body: string;
  showServices?: boolean;
};

export function GetRightBaselinePage({ eyebrow, heading, body, showServices = false }: GetRightBaselinePageProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbf8f1] text-[#17212b]">
      <GetRightHeader />
      <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -right-36 top-12 h-[34rem] w-[34rem] rounded-full border border-[#bd8736]/12" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-28 h-[24rem] w-[24rem] rounded-full border border-[#bd8736]/18" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(198,148,68,.13),transparent_27%)]" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[92rem]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[#a97429]">{eyebrow}</p>
          <span className="mt-4 block h-px w-16 bg-[#bd8736]" />
          <h1 className="mt-8 max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#17222d]">{heading}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#58626b]">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {showServices && <Link href="/get-right#services" className="inline-flex min-h-12 items-center justify-center bg-[#c18c3d] px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#17212b] transition hover:bg-[#d2a156] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">View services</Link>}
            <Link href="/get-right" className="inline-flex min-h-12 items-center justify-center border border-[#a98555]/55 bg-white/45 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#26313b] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f6d28]">Back to Get Right</Link>
          </div>
        </div>
      </section>
      <GetRightFooter />
    </main>
  );
}
