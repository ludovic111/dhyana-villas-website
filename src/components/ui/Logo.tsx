"use client";

export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const textClass = variant === "light" ? "text-coconut" : "text-volcanic";
  const frameClass =
    variant === "light"
      ? "border-coconut/16 bg-coconut/8 shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
      : "border-jungle/10 bg-coconut/80 shadow-[0_16px_40px_rgba(17,26,23,0.08)]";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div
        className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.25rem] border backdrop-blur-md ${frameClass}`}
      >
        <div className="absolute inset-[1px] rounded-[1.15rem] bg-[linear-gradient(160deg,rgba(255,255,255,0.12),transparent_60%)]" />
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative text-gold"
        >
          <path
            d="M13 3.5c1.8 2.7 2.9 5.3 2.9 7.6 0 3.7-1.8 6-2.9 7.1-1.1-1.1-2.9-3.4-2.9-7.1 0-2.3 1.1-4.9 2.9-7.6Z"
            fill="currentColor"
            opacity="0.96"
          />
          <path
            d="M7.1 10.7c2.2-.1 4.2.8 5.9 2.7-1 2.6-3 4.5-5.9 5.7-.7-1.5-.9-2.9-.6-4.2.3-1.3 1.1-2.7 2.4-4.2Z"
            fill="currentColor"
            opacity="0.62"
          />
          <path
            d="M18.9 10.7c-2.2-.1-4.2.8-5.9 2.7 1 2.6 3 4.5 5.9 5.7.7-1.5.9-2.9.6-4.2-.3-1.3-1.1-2.7-2.4-4.2Z"
            fill="currentColor"
            opacity="0.62"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className={`font-heading text-[1.42rem] tracking-[0.18em] uppercase ${textClass}`}>
          Dhyana
        </span>
        <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold">
          Koh Phangan Villas
        </span>
      </div>
    </div>
  );
}
