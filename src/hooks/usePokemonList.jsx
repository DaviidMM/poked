import { useSelector } from 'react-redux';

export default function usePokemonList() {
  return useSelector((state) => state.pokemon);
}
