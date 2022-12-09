export default function RockBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M95 34l10 31-13 16-9-14zm-21 67l14-16-10-14-31 21zM52 34L24 64l1 21 15 5 37-25 11-31z"
        ></path>
      </g>
    </svg>
  );
}
