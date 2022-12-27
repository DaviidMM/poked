import { useState } from 'react';
import usePokemon from '../../hooks/usePokemon';
import usePokemonList from '../../hooks/usePokemonList';
import Select from '../Select';
import pokemonListStatuses from '../../store/slices/pokemon/status';
import itemListStatuses from '../../store/slices/items/status';
import Switch from '../Switch';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox';
import { toast } from 'react-toastify';
import useItems from '../../hooks/useItems';
import { useMemo } from 'react';
import { addTradeOffer } from '../../store/slices/tradeOffers/thunks';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import Autocomplete from '../Autocomplete';

export default function NewOfferForm({ closeModal }) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { list: pokemonList, status: pokemonListStatus } = usePokemonList();
  const { list: itemList, status: itemListStatus } = useItems();
  const pokeballs = useMemo(
    () => itemList.filter((i) => i.category === 'pokeBalls'),
    [itemList]
  );

  const [pokemonNumber, setPokemonNumber] = useState(-1);
  const pokemon = usePokemon({ pokemon: pokemonNumber });
  const [shiny, setShiny] = useState(false);
  const [ball, setBall] = useState(
    itemListStatus === itemListStatuses.loaded
      ? pokeballs.find((p) => p.name === 'Poké Ball').id
      : -1
  );
  const [level, setLevel] = useState(100);
  const [nature, setNature] = useState('');
  const [item, setItem] = useState(-1);
  const [ivs, setivs] = useState({
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31,
  });
  const [evs, setevs] = useState({
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  });

  const handleShinyChange = () => setShiny(!shiny);
  const handlePokemonChange = (selectedValue) => {
    setPokemonNumber(selectedValue.value);
  };
  const handleBallChange = (e) => setBall(Number(e.target.value));
  const handleLevelChange = (e) => setLevel(Number(e.target.value));
  const handleNatureChange = (e) => setNature(e.target.value);
  const handleItemChange = (e) => setItem(Number(e.target.value));

  const handleIvsChange = (e) => {
    const { name, checked } = e.target;
    setivs((prev) => ({ ...prev, [name]: checked ? 31 : 0 }));
  };

  const handleEvsChange = (e) => {
    const { name, value } = e.target;
    // Calculate total evs without the current stat
    const totalEvs = Object.entries(evs)
      .filter(([stat]) => stat !== name)
      .reduce((acc, [, ev]) => acc + ev, 0);
    if (totalEvs + Number(value) > 510) {
      return toast.error('No se puede superar los 510 evs totales');
    }
    setevs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handlePostOffer = (e) => {
    e.preventDefault();
    console.log('submit');
    dispatch(
      addTradeOffer({
        giving: {
          pokemon: pokemon.number,
          shiny,
          ball,
          level,
          nature,
          item,
          ivs,
          evs,
        },
        postedBy: user.uid,
      })
    )
      .then((createdOffer) => {
        console.log({ createdOffer });
        toast.success('Oferta creada con éxito');
        closeModal();
      })
      .catch((err) => {
        toast.error('Error al publicar la oferta');
        console.error(err);
      });
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handlePostOffer}>
      <Autocomplete
        suggestions={[
          { label: '', value: -1 },
          ...pokemonList.map((pokemon) => ({
            label: pokemon.name,
            value: pokemon.number,
          })),
        ]}
        selected={pokemonList
          .map((pokemon) => ({
            label: pokemon.name,
            value: pokemon.number,
          }))
          .find((p) => p.value === pokemonNumber)}
        onSelect={handlePokemonChange}
        placeholder="Escribe el nombre del pokemon que quieres ofrecer"
      />

      {pokemon ? (
        <div className="flex flex-row gap-8">
          <img className="h-48" src={pokemon.sprite} alt={pokemon.name} />
          <div className="w-full h-fit border-2 border-red-900 p-4 rounded-xl grid grid-cols-2 gap-4">
            <div className="flex flex-row justify-between gap-4 col-span-2">
              <div className="flex flex-col gap-3.5">
                <label className="block text-left">Shiny</label>
                <Switch
                  id="shiny"
                  name="shiny"
                  enabled={shiny}
                  onChange={handleShinyChange}
                />
              </div>
              <Select
                className="w-full"
                label="Ball"
                name="ball"
                options={
                  itemListStatus === itemListStatuses.loaded
                    ? pokeballs.map((p) => ({ value: p.id, label: p.name }))
                    : [{ value: -1, label: 'Cargando...', disabled: true }]
                }
                value={ball}
                onChange={handleBallChange}
              />
              <Select
                className="w-full"
                label="Naturaleza"
                name="nature"
                options={[
                  {
                    value: '',
                    label: 'Seleccionar',
                    disabled: true,
                  },
                  { value: 'hasty', label: 'Activa' },
                  { value: 'mild', label: 'Afable' },
                  { value: 'impish', label: 'Agitada' },
                  { value: 'jolly', label: 'Alegre' },
                  { value: 'rash', label: 'Alocada' },
                  { value: 'gentle', label: 'Amable' },
                  { value: 'brave', label: 'Audaz' },
                  { value: 'careful', label: 'Cauta' },
                  { value: 'docile', label: 'Dócil' },
                  { value: 'adamant', label: 'Firme' },
                  { value: 'lax', label: 'Floja' },
                  { value: 'hardy', label: 'Fuerte' },
                  { value: 'sassy', label: 'Grosera' },
                  { value: 'lonely', label: 'Huraña' },
                  { value: 'naive', label: 'Ingenua' },
                  { value: 'quiet', label: 'Mansa' },
                  { value: 'timid', label: 'Miedosa' },
                  { value: 'modest', label: 'Modesta' },
                  { value: 'bold', label: 'Osada' },
                  { value: 'naughty', label: 'Pícara' },
                  { value: 'relaxed', label: 'Plácida' },
                  { value: 'quirky', label: 'Rara' },
                  { value: 'calm', label: 'Serena' },
                  { value: 'serious', label: 'Seria' },
                  { value: 'bashful', label: 'Tímida' },
                ]}
                onChange={handleNatureChange}
                value={nature}
              />
              <Input
                label="Nivel"
                name="level"
                type="number"
                value={level}
                onChange={handleLevelChange}
              />
            </div>
            <Select
              className="flex flex-col justify-between"
              label="Objeto"
              name="item"
              options={
                itemListStatus === itemListStatuses.loaded
                  ? [
                      { value: -1, label: 'Ninguno' },
                      ...itemList.map((i) => ({ value: i.id, label: i.name })),
                    ]
                  : [{ value: -1, label: 'Cargando...', disabled: true }]
              }
              value={item}
              onChange={handleItemChange}
            />
            <div className="flex flex-col gap-2">
              <label>IVs</label>
              <div className="flex flex-row justify-between pb-2">
                <div className="flex flex-col gap-2 items-center">
                  <label htmlFor="hp">HP</label>
                  <Checkbox
                    name="hp"
                    id="hp"
                    checked={ivs.hp === 31}
                    onChange={handleIvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label htmlFor="atk">Atk</label>
                  <Checkbox
                    name="atk"
                    id="atk"
                    checked={ivs.atk === 31}
                    onChange={handleIvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label htmlFor="def">Def</label>
                  <Checkbox
                    name="def"
                    id="def"
                    checked={ivs.def === 31}
                    onChange={handleIvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label htmlFor="spa">SpA</label>
                  <Checkbox
                    name="spa"
                    id="spa"
                    checked={ivs.spa === 31}
                    onChange={handleIvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label htmlFor="spd">SpD</label>
                  <Checkbox
                    name="spd"
                    id="spd"
                    checked={ivs.spd === 31}
                    onChange={handleIvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label htmlFor="spe">Spe</label>
                  <Checkbox
                    name="spe"
                    id="spe"
                    checked={ivs.spe === 31}
                    onChange={handleIvsChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col">
              <label>EVs</label>
              <div className="flex flex-row justify-between gap-2">
                <div className="flex flex-col gap-2 items-center">
                  <label>HP</label>
                  <Input
                    className="[&_input]:text-center"
                    type="number"
                    name="hp"
                    max="252"
                    min="0"
                    id="hp"
                    value={evs.hp}
                    onChange={handleEvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label>Atk</label>
                  <Input
                    className="[&_input]:text-center"
                    type="number"
                    name="atk"
                    max="252"
                    min="0"
                    id="atk"
                    value={evs.atk}
                    onChange={handleEvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label>Def</label>
                  <Input
                    className="[&_input]:text-center"
                    type="number"
                    name="def"
                    max="252"
                    min="0"
                    id="def"
                    value={evs.def}
                    onChange={handleEvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label>SpA</label>
                  <Input
                    className="[&_input]:text-center"
                    type="number"
                    name="spa"
                    max="252"
                    min="0"
                    id="spa"
                    value={evs.spa}
                    onChange={handleEvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label>SpD</label>
                  <Input
                    className="[&_input]:text-center"
                    type="number"
                    name="spd"
                    max="252"
                    min="0"
                    id="spd"
                    value={evs.spd}
                    onChange={handleEvsChange}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <label>Spe</label>
                  <Input
                    className="[&_input]:text-center"
                    type="number"
                    name="spe"
                    max="252"
                    min="0"
                    id="spe"
                    value={evs.spe}
                    onChange={handleEvsChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-4xl text-red-300 select-none">
          Selecciona un pokemon para continuar
        </h2>
      )}
      <Button
        color="red"
        disabled={
          !pokemon ||
          pokemonListStatus !== pokemonListStatuses.loaded ||
          itemListStatus !== itemListStatuses.loaded
        }
      >
        Publicar
      </Button>
    </form>
  );
}
