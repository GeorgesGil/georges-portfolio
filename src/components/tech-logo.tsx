import type { TechMark } from "@/lib/portfolio-dictionary";

/**
 * A technology mark at its brand colour.
 * simple-icons draws one path, so the official hex is applied as the fill;
 * devicons ships finished multi-colour marks and is rendered as-is.
 */
export function TechLogo({ mark }: { mark: TechMark }) {
  if (mark.kind === "simple") {
    return (
      <span className="tech-logo" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="presentation" style={{ color: `#${mark.icon.hex}` }}>
          <path d={mark.icon.path} fill="currentColor" />
        </svg>
      </span>
    );
  }

  const Icon = mark.icon;
  return (
    <span className="tech-logo" aria-hidden="true">
      <Icon size={20} aria-hidden="true" focusable="false" />
    </span>
  );
}
