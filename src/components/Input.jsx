export default function Input({ label, id, onChange, type, value, ...props }) {
  return (
    <div className="mb-2 last-of-type:mb-0">
      {label && (
        <label className="block mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="w-full px-4 py-1.5 text-base font-normal outline-none bg-size-200 bg-pos-0 focus:bg-pos-100 transition-all bg-[linear-gradient(to_right,white_50%,#fecaca_50%)]"
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
}
