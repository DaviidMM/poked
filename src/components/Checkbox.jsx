export default function Checkbox({ checked, id, onChange, name, ...props }) {
  return (
    <div className="w-5 h-5 relative">
      <input
        className="bg-white hover:bg-red-200 border-2 border-red-600 transition-colors duration-100 rounded-sm appearance-none outline-none w-full h-full checked:border-none checked:bg-red-600 checked:hover:bg-red-700"
        type="checkbox"
        checked={checked}
        id={id}
        onChange={onChange}
        name={name}
        {...props}
      />
      <span
        className={
          'absolute block rotate-45 -translate-x-1/2 border-b-2 border-r-2 border-white pointer-events-none -translate-y-[60%] top-1/2 left-1/2 ' +
          (checked
            ? 'animate-checkmark w-1/3 h-2/3'
            : 'animate-undo-checkmark w-0 h-0 opacity-0')
        }
      ></span>
    </div>
  );
}
