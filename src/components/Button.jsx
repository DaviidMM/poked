export default function Button({ children, className, ...props }) {
  return (
    <button
      className={
        'px-4 py-2 rounded-full bg-white hover:bg-red-100 transition-colors items-center flex flex-row gap-2 font-semibold group' +
        (className ? ' ' + className : '')
      }
      {...props}
    >
      {children}
    </button>
  );
}
