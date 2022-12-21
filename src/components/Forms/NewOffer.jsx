import usePokemonList from '../../hooks/usePokemonList';

export default function NewOfferForm() {
  const [pokemonList, setPokemonList] = usePokemonList();

  console.log({ pokemonList });

  return <form>Formulario de nueva oferta</form>;
}
