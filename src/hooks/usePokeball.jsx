import { useSelector } from 'react-redux';

export default function usePokeball(id) {
  const pokeballs = useSelector((state) =>
    state.items.list.filter((i) => i.category === 'pokeBalls')
  );

  return pokeballs.find((p) => p.id === id);
}
