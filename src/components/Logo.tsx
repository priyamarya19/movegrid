import { LogoIcon } from "./LogoIcon";
import { LogoWordmark } from "./LogoWordmark";

interface LogoProps {
  /** "full" = icon + wordmark, "icon" = icon only, "wordmark" = wordmark only */
  variant?: "full" | "icon" | "wordmark";
  size?: number;
  className?: string;
}

export function Logo({ variant = "full", size = 40, className = "" }: LogoProps) {
  if (variant === "icon") return <LogoIcon size={size} className={className} />;
  if (variant === "wordmark") return <LogoWordmark height={size} className={className} />;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={size} />
      <LogoWordmark height={Math.round(size * 0.75)} />
    </div>
  );
}
