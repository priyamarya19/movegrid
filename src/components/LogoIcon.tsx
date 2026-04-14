export function LogoIcon({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-icon.png"
      alt="MoveGrid"
      width={size}
      height={size}
      className={className}
      style={{ display: "block" }}
    />
  );
}
