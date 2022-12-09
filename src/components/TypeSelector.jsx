import TypeBadge from './TypeBadge';

const typeRings = {
  bug: 'ring-[#90c12c]',
  dark: 'ring-[#5a5366]',
  dragon: 'ring-[#096dc4]',
  electric: 'ring-[#f3d23b]',
  fairy: 'ring-[#ec8fe6]',
  fighting: 'ring-[#ce4069]',
  fire: 'ring-[#ff9c54]',
  flying: 'ring-[#92aade]',
  ghost: 'ring-[#5269ac]',
  grass: 'ring-[#63bb5b]',
  ground: 'ring-[#d97746]',
  ice: 'ring-[#74cec0]',
  normal: 'ring-[#9099a1]',
  poison: 'ring-[#ab6ac8]',
  psychic: 'ring-[#f97176]',
  rock: 'ring-[#c7b78b]',
  steel: 'ring-[#5a8ea1]',
  water: 'ring-[#4d90d5]',
};

export default function TypeSelector({
  type,
  selected = false,
  onSelect = () => {},
  selectedIndex = null,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    onSelect({ type, selected: !selected });
  };

  return (
    <div
      className={
        'relative rounded-2xl overflow-hidden' +
        ' ' +
        (selected ? 'ring-4 ring-offset-2' : '') +
        ' ' +
        typeRings[type.name]
      }
    >
      <input
        className="peer hidden"
        type="checkbox"
        checked={true}
        onChange={() => {}}
      />
      <button className="w-full h-full" onClick={handleClick}>
        <TypeBadge type={type} />
      </button>
      {selectedIndex !== -1 && (
        <span className="hidden xl:block absolute right-2 top-3 text-white font-bold">
          {selectedIndex + 1}
        </span>
      )}
    </div>
  );
}
