export default function FairyBadge({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="64" r="64" fill="transparent"></circle>
      <path
        fill="currentColor"
        d="M111 64L86 50.34l3.46-11.83L77.66 42 64 17 50.34 42l-11.83-3.49L42 50.34 17 64l25 13.66-3.49 11.83L50.34 86 64 111l13.66-25 11.83 3.46L86 77.66zm-40.28 6.72L64 83l-6.72-12.28L45 64l12.28-6.72L64 45l6.72 12.28L83 64z"
      ></path>
    </svg>
  );
}
