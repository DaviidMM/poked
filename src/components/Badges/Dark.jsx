export default function DarkBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M96.15 64a31.49 31.49 0 01-41.76 29.78 31.5 31.5 0 000-59.56A31.49 31.49 0 0196.15 64zM64 24a40 40 0 1040 40 40 40 0 00-40-40z"
        ></path>
      </g>
    </svg>
  );
}
