import type { SVGProps } from 'react';

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 4h-2a4 4 0 0 0-4 4v10" />
      <path d="M12 14c1.66 0 3-1.34 3-3V4" />
      <path d="M16 4a3 3 0 1 1-3 3" />
    </svg>
  );
}
