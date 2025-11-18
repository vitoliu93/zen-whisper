
import React from 'react';

export const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    <path d="M2 12L9.5 9.5L12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12Z" />
    <path d="M22 2L20 7L15 9L20 11L22 16L24 11L29 9L24 7L22 2Z" />
    <path d="M12 22L9.5 14.5L2 12L9.5 9.5L12 2L14.5 9.5L22 12L14.5 14.5L12 22Z" />
  </svg>
);
