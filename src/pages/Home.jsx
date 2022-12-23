import { useDispatch } from 'react-redux';
import usePokemonList from '../hooks/usePokemonList.jsx';
import { setPokemonList } from '../store/slices/pokemonList';
import pokemonListStatus from '../store/slices/pokemonList/status';

export default function HomePage() {
  const dispatch = useDispatch();
  const { list, status } = usePokemonList();

  const handleAddPokemon = () => {
    dispatch(setPokemonList([{ name: 'Pikachu' }, { name: 'Charmander' }]));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Home page</h1>
      <button onClick={handleAddPokemon}>Añadir pokemon</button>
      {status === pokemonListStatus.loaded &&
        list.map((pokemon) => (
          <img
            key={pokemon.name}
            src={`/pokemon/icons/${pokemon.name.toLowerCase()}.png`}
          />
        ))}
    </div>
  );
}
