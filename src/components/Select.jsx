export default function Select({
  className,
  options,
  value,
  onChange = () => {},
  ...props
}) {
  return (
    <select
      className={
        'px-4 py-1 rounded-full font-semibold text-red-900 hover:bg-red-50 transition-colors outline-none' +
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
  );
}
