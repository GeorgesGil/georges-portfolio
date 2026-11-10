import type { SVGProps } from "react";

/** Matches the shape devicons-react exposes, so this can sit in the same slot
 *  as the library marks without a cast at the call site. */
type Props = SVGProps<SVGElement> & { size?: number | string };

/**
 * The AWS mark: the smile that ends in an arrowhead.
 *
 * Neither icon library ships an icon-only AWS mark — simple-icons dropped the
 * brand, and devicons only has wordmarks, which become an unreadable smear at
 * 20px inside a chip. This is that same smile drawn at the optical weight of
 * the surrounding marks, in the official AWS orange.
 */
export function AwsMark({ size = 20, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="presentation"
      focusable="false"
      aria-hidden="true"
      {...(props as SVGProps<SVGSVGElement>)}
    >
      <path
        d="M2.6 11.9c1.4 5.2 9.6 7.8 14.4 4.4"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <path d="M15.7 15.5 21.9 13.1 20.4 19.1Z" fill="#FF9900" />
    </svg>
  );
}
