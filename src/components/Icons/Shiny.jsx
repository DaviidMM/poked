// import tailwind colors
import colors from 'tailwindcss/colors';

export default function ShinyIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128"
      {...props}
    >
      <g>
        <path
          d="M19.42,44.8c11.92-8.43,19.3-18.14,23.34-24.64c4.04,6.5,11.42,16.2,23.34,24.64 c-11.91,8.43-19.3,18.13-23.34,24.63C38.73,62.94,31.34,53.23,19.42,44.8z"
          fill={colors.orange[100]}
        />
        <path
          d="M96.2,81.84c-2.5-3.16-6.54-7.36-12.52-11.23c5.98-3.87,10.01-8.07,12.52-11.23 c2.5,3.16,6.54,7.36,12.51,11.23C102.74,74.48,98.71,78.68,96.2,81.84z"
          fill={colors.orange[100]}
        />
        <path
          d="M63.71,110.4c-2.08-3.05-5.18-6.82-9.56-10.3c4.38-3.49,7.48-7.25,9.56-10.31 c2.08,3.05,5.18,6.82,9.56,10.31C68.89,103.58,65.79,107.35,63.71,110.4z"
          fill={colors.orange[100]}
        />
        <g>
          <path
            d="M46.7,80.07c0.08-0.19,8.09-18.86,29.4-31.61l6.12-3.66l-6.12-3.67 C54.79,28.39,46.78,9.72,46.71,9.54l-3.92-9.46l-3.96,9.45c-0.08,0.19-8.09,18.86-29.4,31.61L3.3,44.8l6.12,3.66 c21.31,12.75,29.32,31.42,29.4,31.61l3.92,9.44L46.7,80.07z M19.42,44.8c11.92-8.43,19.3-18.14,23.34-24.64 c4.04,6.5,11.42,16.2,23.34,24.64c-11.91,8.43-19.3,18.13-23.34,24.63C38.73,62.94,31.34,53.23,19.42,44.8z"
            fill={colors.orange[400]}
          />
          <path
            d="M117.92,67.26c-13.32-6.58-18.34-16.13-18.38-16.21l-3.31-6.56l-3.36,6.55 c-0.05,0.09-5.07,9.64-18.39,16.23l-6.78,3.35l6.78,3.35c13.29,6.57,18.32,16.08,18.39,16.23l3.3,6.55l3.36-6.55 c0.05-0.09,5.07-9.64,18.39-16.23l6.78-3.35L117.92,67.26z M96.2,81.84c-2.5-3.16-6.54-7.36-12.52-11.23 c5.98-3.87,10.01-8.07,12.52-11.23c2.5,3.16,6.54,7.36,12.51,11.23C102.74,74.48,98.71,78.68,96.2,81.84z"
            fill={colors.orange[400]}
          />
          <path
            d="M67.18,80.82l-3.43-8.54l-3.49,8.53c-0.04,0.09-4.03,9.61-14.54,16.11l-5.14,3.18l5.14,3.17 c10.46,6.47,14.46,15.92,14.54,16.11l3.43,8.53l3.49-8.53c0.04-0.1,4.02-9.61,14.54-16.11l5.14-3.17l-5.14-3.18 C71.2,90.42,67.21,80.91,67.18,80.82z M63.71,110.4c-2.08-3.05-5.18-6.82-9.56-10.3c4.38-3.49,7.48-7.25,9.56-10.31 c2.08,3.05,5.18,6.82,9.56,10.31C68.89,103.58,65.79,107.35,63.71,110.4z"
            fill={colors.orange[400]}
          />
        </g>
      </g>
    </svg>
  );
}
