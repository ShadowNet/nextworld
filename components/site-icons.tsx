export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

export function BrandMark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-[#b7893e]/70 font-serif text-lg font-bold text-[#9c702f]">
      R
    </span>
  );
}
