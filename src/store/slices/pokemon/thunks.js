import { getPokemonList } from '../../../services/firebase/db/index.js';
import { setPokemonList, setPokemonListLoading } from './index.js';

export const loadPokemonList = () => {
  return async (dispatch) => {
    dispatch(setPokemonListLoading());
    const pokemonList = await getPokemonList();
    dispatch(setPokemonList(pokemonList));
  };
};
