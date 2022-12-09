export default function SteelBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M84 64a20 20 0 11-20-20 20 20 0 0120 20zm1.75-37.67h-43.5L20.5 64l21.75 37.67h43.5L107.5 64z"
        ></path>
      </g>
    </svg>
  );
}
