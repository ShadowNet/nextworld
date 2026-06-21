import Link from "next/link";
import { ArrowIcon, BrandMark } from "@/components/site-icons";
import { BrandDropdownMenu } from "@/components/brand-dropdown-menu";

export function PlaceholderPage({ title }: { title: "RESUME" | "ABOUT" }) {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-[#f4f0e9] px-6 text-[#17202c]">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_75%_20%,rgba(203,158,85,.28),transparent_23%),radial-gradient(circle_at_15%_80%,rgba(145,159,172,.22),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 z-40 flex items-center justify-between p-6 sm:p-10">
        <BrandDropdownMenu
          label="REDGHY"
          leading={<BrandMark />}
          triggerClassName="text-xs font-semibold tracking-[0.35em] text-[#17202c]"
        />
      </div>
      <section className="relative text-center">
        <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.5em] text-[#ad8039]">REDGHY</p>
        <h1 className="text-[clamp(4rem,15vw,10rem)] font-semibold leading-none tracking-[-0.07em]">{title}</h1>
        <p className="mt-6 text-lg text-[#66707a]">Coming soon.</p>
        <Link
          href="/"
          className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-[#b88a42]/55 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition hover:bg-[#b88a42] hover:text-white"
        >
          Back home <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
