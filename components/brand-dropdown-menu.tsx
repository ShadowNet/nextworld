"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

const destinations = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Get Right", href: "/get-right" },
  { label: "About", href: "/about" },
];

type BrandDropdownMenuProps = {
  label: "REDGHY" | "GET RIGHT";
  tone?: "light" | "dark";
  leading?: ReactNode;
  triggerClassName?: string;
  menuClassName?: string;
};

export function BrandDropdownMenu({
  label,
  tone = "light",
  leading,
  triggerClassName = "",
  menuClassName = "",
}: BrandDropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function menuItems() {
    return Array.from(menuRef.current?.querySelectorAll<HTMLElement>("[role='menuitem']") ?? []);
  }

  function focusItem(position: "first" | "last") {
    requestAnimationFrame(() => {
      const items = menuItems();
      items[position === "first" ? 0 : items.length - 1]?.focus();
    });
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setOpen(true);
    focusItem(event.key === "ArrowDown" ? "first" : "last");
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    const items = menuItems();
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    if (event.key === "Tab") {
      setOpen(false);
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    if (event.key === "Home") items[0]?.focus();
    else if (event.key === "End") items.at(-1)?.focus();
    else {
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = (currentIndex + direction + items.length) % items.length;
      items[nextIndex]?.focus();
    }
  }

  const dark = tone === "dark";

  return (
    <div ref={rootRef} className="relative z-[100] w-fit">
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Open ${label} navigation`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={handleTriggerKeyDown}
        className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-sm transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 ${
          dark ? "focus-visible:outline-[#e5bd73]" : "focus-visible:outline-[#b7863d]"
        } ${triggerClassName}`}
      >
        {leading}
        <span>{label}</span>
        <svg aria-hidden="true" viewBox="0 0 12 8" className={`h-2 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="m1 1.5 5 5 5-5" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            id={menuId}
            aria-label={`${label} quick navigation`}
            className={`absolute left-0 top-[calc(100%+.5rem)] z-[110] w-[min(14rem,calc(100vw-2rem))] overflow-hidden rounded-lg border p-1.5 backdrop-blur-xl ${
              dark
                ? "border-[#e1b766]/25 bg-[#11161b]/88 text-[#f8f1e4] shadow-[0_20px_55px_rgba(0,0,0,.34)]"
                : "border-[#aa8247]/20 bg-[#fffaf0]/92 text-[#1d2832] shadow-[0_18px_50px_rgba(44,35,24,.16)]"
            } ${menuClassName}`}
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onKeyDown={handleMenuKeyDown}
          >
            {destinations.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center gap-3 rounded-md px-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none ${
                    dark
                      ? "hover:bg-[#d8ab5b]/12 hover:text-[#f1c978] focus-visible:bg-[#d8ab5b]/12 focus-visible:text-[#f1c978]"
                      : "hover:bg-[#b7863d]/10 hover:text-[#a56f25] focus-visible:bg-[#b7863d]/10 focus-visible:text-[#a56f25]"
                  } ${active ? (dark ? "bg-[#d8ab5b]/10 text-[#f1c978]" : "bg-[#b7863d]/9 text-[#a56f25]") : ""}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-[#c99542]" : "bg-transparent"}`} aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
