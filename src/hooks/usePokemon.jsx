import { useSelector } from 'react-redux';

export default function usePokemon(number) {
  const pokemonList = useSelector((state) => state.pokemon.list);
  const pokemon = pokemonList.find((pokemon) => pokemon.number === number);
  return pokemon;
}
