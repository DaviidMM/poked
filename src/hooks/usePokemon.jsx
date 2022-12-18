import { useEffect } from 'react';
import { useState } from 'react';

export default function usePokemon(name) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      console.log({ res })
    );
  }, [name]);

  return pokemon;
}
