export default function Input({
  className,
  label,
  id,
  onChange,
  type,
  value,
  ...props
}) {
  return (
    <div
      className={
        'last-of-type:mb-0 relative' + (className ? ' ' + className : '')
      }
    >
      {label && (
        <label className="block mb-2 text-left" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="border-2 border-red-900 rounded-xl w-full overflow-hidden relative">
        <input
          className="px-4 py-1.5 text-base outline-none w-full h-full peer z-20 relative bg-transparent focus:text-red-900 transition-colors"
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          {...props}
        />
        <span className="z-10 block bg-red-100 rounded-lg h-full absolute top-0 left-0 w-0 peer-focus:w-full transition-all"></span>
      </div>
    </div>
  );
}
