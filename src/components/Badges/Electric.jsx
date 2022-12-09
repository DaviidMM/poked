export default function ElectricBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M43 29L74 29 87 70 67 69 79 103 31 53.5 54 53.5 43 29z"
        ></path>
      </g>
    </svg>
  );
}
