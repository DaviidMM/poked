export default function DarkBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <g>
        <circle cx="64" cy="64" r="64" fill="transparent"></circle>
        <path
          fill="currentColor"
          d="M92.5 76a28.5 28.5 0 01-57 0c0-15.74 23-50.5 28.5-50.5S92.5 60.26 92.5 76zm-25 9.5a15 15 0 01-15-15 14.85 14.85 0 011.12-5.67A17 17 0 1080 79v-.2a15 15 0 01-12.5 6.7z"
        ></path>
      </g>
    </svg>
  );
}
