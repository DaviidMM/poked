export default function NormalBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M64 104a40 40 0 1140-40 40 40 0 01-40 40zm0-64a24 24 0 1024 24 24 24 0 00-24-24z"
        ></path>
      </g>
    </svg>
  );
}
