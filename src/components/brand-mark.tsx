/**
 * The GG monogram: two drawn G's on a square of accent colour.
 * The same artwork is the favicon (`src/app/icon.svg`), so the mark in the
 * header and the mark in the browser tab are one design. Keep the path data in
 * both files in sync.
 */
export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" role="presentation" focusable="false">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.3}
        >
          <path d="M13.1 11.2c-.8-1.1-2-1.7-3.6-1.7-2.9 0-4.8 2.1-4.8 5s1.9 5 4.8 5c1.5 0 2.8-.5 3.7-1.3v-3.4H9.4" />
          <path d="M27.3 11.2c-.8-1.1-2-1.7-3.6-1.7-2.9 0-4.8 2.1-4.8 5s1.9 5 4.8 5c1.5 0 2.8-.5 3.7-1.3v-3.4h-3.8" />
        </g>
      </svg>
    </span>
  );
}
