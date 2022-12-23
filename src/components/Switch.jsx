export default function Switch({ enabled, label, name, onChange }) {
  return (
    <button className="flex flex-row gap-2" onClick={onChange} type="button">
      <input
        checked={enabled}
        className="hidden peer"
        name={name}
        onChange={() => {}}
        type="checkbox"
      />
      {label && <label className="text-red-900">{label}</label>}
      <div className="w-10 h-6 p-1 rounded-full bg-red-300 peer-checked:bg-red-600 peer-checked:[&>span]:translate-x-4 [&>span]:bg-gray-900 peer-checked:[&>span]:bg-white transition-colors duration-200">
        <span className="block w-4 h-4 transition-transform duration-200 rounded-full p-0.5">
          {enabled && (
            <span className="block w-full h-full border-2 rounded-full border-zinc-400"></span>
          )}
        </span>
      </div>
    </button>
  );
}
