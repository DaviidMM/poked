export default function Select({
  className,
  id,
  label,
  options,
  value,
  onChange = () => {},
  ...props
}) {
  return (
    <div
      className={
        'group overflow-hidden relative [&:has(select:disabled)]:opacity-75 [&:has(select:disabled)]:cursor-not-allowed [&:has(select:disabled)]:pointer-events-none' +
        (className ? ' ' + className : '')
      }
    >
      {label && (
        <label className="block mb-2 text-left" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        className={
          'px-4 py-1 rounded-full border-2 border-red-900 font-semibold text-red-900 hover:bg-red-50 transition-colors outline-none' +
          (className ? ' ' + className : '')
        }
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
