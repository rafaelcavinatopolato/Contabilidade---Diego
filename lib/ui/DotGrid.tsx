interface DotGridProps {
  size?: number;
  dotSize?: number;
  color?: string;
  opacity?: number;
}

export function DotGrid({
  size = 24,
  dotSize = 1,
  color = "#ffffff",
  opacity = 0.06,
}: DotGridProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
