import useTranslation from '../hooks/useTranslation';
import useTypeBadge from '../hooks/useTypeBadge';

const typeColors = {
  bug: 'bg-[#90c12c]',
  dark: 'bg-[#5a5366]',
  dragon: 'bg-[#096dc4]',
  electric: 'bg-[#f3d23b]',
  fairy: 'bg-[#ec8fe6]',
  fighting: 'bg-[#ce4069]',
  fire: 'bg-[#ff9c54]',
  flying: 'bg-[#92aade]',
  ghost: 'bg-[#5269ac]',
  grass: 'bg-[#63bb5b]',
  ground: 'bg-[#d97746]',
  ice: 'bg-[#74cec0]',
  normal: 'bg-[#9099a1]',
  poison: 'bg-[#ab6ac8]',
  psychic: 'bg-[#f97176]',
  rock: 'bg-[#c7b78b]',
  steel: 'bg-[#5a8ea1]',
  water: 'bg-[#4d90d5]',
};

export default function TypeBadge({
  className = '',
  disabled = false,
  type,
  description = true,
  icon = true,
}) {
  const { t: translate } = useTranslation();
  const Badge = useTypeBadge(type);

  return (
    <div
      className={
        'flex flex-row select-none h-full justify-start gap-2 pl-1 xl:pl-2 pr-2 xl:pr-4 items-center transition-all filter text-white' +
        ' ' +
        (disabled ? 'cursor-not-allowed' : 'hover:brightness-90') +
        ' ' +
        typeColors[type.name] +
        ' ' +
        (className || '')
      }
    >
      {Badge && icon && <Badge className="w-10 h-10" />}
      {description && (
        <span className="text-sm font-bold shrink truncate">
          {translate('types.' + type.name)}
        </span>
      )}
    </div>
  );
}
