"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandDropdownMenu } from "@/components/brand-dropdown-menu";

const navigation = [
  { label: "Services", href: "/get-right#services", match: "/get-right" },
  { label: "Policy", href: "/get-right/policy", match: "/get-right/policy" },
  { label: "Catalog", href: "/get-right/catalog", match: "/get-right/catalog" },
];

export function GetRightHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#2a3139]/10 bg-[#fbf8f1]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] w-[min(92%,96rem)] items-center justify-between gap-8">
        <BrandDropdownMenu
          label="GET RIGHT"
          triggerClassName="text-xl font-bold tracking-[-0.035em] text-[#b7863d] sm:text-2xl"
        />

        <nav aria-label="Get Right navigation" className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => {
            const active = item.match === "/get-right"
              ? pathname === "/get-right" || pathname.startsWith("/get-right/app-development") || pathname.startsWith("/get-right/customer-experience")
              : pathname === item.match;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[0.66rem] font-semibold uppercase tracking-[0.17em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7863d] ${
                  active ? "text-[#a56f25]" : "text-[#25303b] hover:text-[#b17c31]"
                }`}
              >
                {item.label}
                {active && <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 mx-auto h-px w-5 bg-[#bd8736]" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="mailto:getrightorganization7@gmail.com"
            className="hidden rounded-full border border-[#bd8a40]/70 px-6 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#9a6925] transition hover:bg-[#b7863d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7863d] sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#17212b] text-white transition hover:bg-[#b7863d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7863d]"
          >
            <span className="flex w-3.5 flex-col gap-1">
              <span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function GetRightFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#78684f]/15 bg-[#f2ede4] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/get-right" className="text-xl font-bold tracking-[-0.035em] text-[#ad792f]">GET RIGHT</Link>
          <p className="mt-3 text-xs text-[#697078]">© {year} GET RIGHT. All rights reserved.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">
          <Link href="/get-right#services" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4d5760] transition hover:text-[#a56f25]">Services</Link>
          <Link href="/get-right/policy" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4d5760] transition hover:text-[#a56f25]">Policy</Link>
          <Link href="/get-right/catalog" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4d5760] transition hover:text-[#a56f25]">Catalog</Link>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4d5760] transition hover:text-[#a56f25]">Home</Link>
        </nav>
      </div>
    </footer>
  );
}
