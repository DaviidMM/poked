import badges from '../data/badges';

export default function useTypeBadge(type) {
  const Badge = badges[type.name] || null;
  return Badge;
}
