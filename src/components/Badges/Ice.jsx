export default function IceBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M60.13 64.26L38.05 76.7 16.76 64l21-12.15zM90 51.3L67.87 63.74 90.2 76.19l21-12.15zM61.45 35.21l-21-12.14-.45 24.8 21.84 12.91zM88 80.13L66.16 67.22l.39 25.57 21 12.14zm-.34-32.73V23.1L66 35.18l-.27 25.34zM62 92.82l.27-25.34L40.34 80.6v24.3z"
        ></path>
      </g>
    </svg>
  );
}
