import { useEffect, useState } from 'react';

export default function usePokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {}, []);

  return pokemonList;
}
