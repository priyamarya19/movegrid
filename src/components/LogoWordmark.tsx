export function LogoWordmark({
  height = 36,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  // Original is 427×122 — maintain aspect ratio
  const width = Math.round((height / 122) * 427);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-wordmark.png"
      alt="MoveGrid"
      width={width}
      height={height}
      className={className}
      style={{ display: "block" }}
    />
  );
}
