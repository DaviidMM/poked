import { useSelector } from 'react-redux';

export default function usePokemons() {
  return useSelector((state) => state.pokemon);
}
