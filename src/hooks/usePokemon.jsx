import { useSelector } from 'react-redux';
import useItem from './useItem';
import usePokeball from './usePokeball.jsx';

export default function usePokemon(pokemonData) {
  const pokemonList = useSelector((state) => state.pokemon.list);
  const ball = usePokeball(pokemonData?.ball);
  const item = useItem(pokemonData?.item);
  const number = pokemonData?.pokemon || -1;
  if (number === -1) return undefined;
  const { name, sprite } = pokemonList.find((p) => p.number === number);
  const pokemon = {
    ball,
    evs: pokemonData.evs || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    item,
    ivs: pokemonData.ivs || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    level: pokemonData.level || 1,
    name,
    nature: pokemonData.nature,
    pokemon: number,
    number,
    shiny: pokemonData.shiny || false,
    sprite,
  };
  return pokemon;
}
