"use client";

export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const textColor = variant === "light" ? "#FFFEF9" : "#1B3A2D";
  const accentColor = "#C9A84C";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Lotus icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center petal */}
        <path
          d="M18 4C18 4 22 12 22 18C22 24 18 28 18 28C18 28 14 24 14 18C14 12 18 4 18 4Z"
          fill={accentColor}
          opacity="0.9"
        />
        {/* Left petal */}
        <path
          d="M8 14C8 14 14 14 17 18C20 22 18 28 18 28C18 28 12 24 10 20C8 16 8 14 8 14Z"
          fill={accentColor}
          opacity="0.6"
        />
        {/* Right petal */}
        <path
          d="M28 14C28 14 22 14 19 18C16 22 18 28 18 28C18 28 24 24 26 20C28 16 28 14 28 14Z"
          fill={accentColor}
          opacity="0.6"
        />
        {/* Far left petal */}
        <path
          d="M4 20C4 20 10 16 15 18C20 20 18 28 18 28C18 28 10 26 6 22C4 20 4 20 4 20Z"
          fill={accentColor}
          opacity="0.35"
        />
        {/* Far right petal */}
        <path
          d="M32 20C32 20 26 16 21 18C16 20 18 28 18 28C18 28 26 26 30 22C32 20 32 20 32 20Z"
          fill={accentColor}
          opacity="0.35"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-accent text-2xl tracking-[0.35em] font-light"
          style={{ color: textColor }}
        >
          DHYANA
        </span>
        <span
          className="font-accent text-[0.6rem] tracking-[0.55em] font-light uppercase"
          style={{ color: accentColor }}
        >
          VILLAS
        </span>
      </div>
    </div>
  );
}
