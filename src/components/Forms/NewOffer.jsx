import { useState } from 'react';
import usePokemon from '../../hooks/usePokemon';
import usePokemonList from '../../hooks/usePokemonList';
import Select from '../Select';
import pokemonListStatuses from '../../store/slices/pokemon/status';
import Switch from '../Switch';
import Button from '../Button';
import Input from '../Input';

export default function NewOfferForm() {
  const { list, status } = usePokemonList();
  const [pokemonNumber, setPokemonNumber] = useState(-1);
  const pokemon = usePokemon(pokemonNumber);
  const [shiny, setShiny] = useState(false);
  const [level, setLevel] = useState(100);
  const [IVs, setIVs] = useState({
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31,
  });
  const [EVs, setEVs] = useState({
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  });

  const handleIVsChange = (e) => {
    const { name, checked } = e.target;
    setIVs((prev) => ({ ...prev, [name]: checked ? 31 : 0 }));
  };

  const handleEVsChange = (e) => {
    const { name, value } = e.target;
    setEVs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="flex flex-col gap-8">
      <Select
        label="Selecciona el pokemon que quieres intercambiar"
        name="pokemon"
        value={pokemonNumber}
        onChange={(e) => setPokemonNumber(e.target.value)}
        options={
          status === pokemonListStatuses.loading
            ? [{ value: -1, label: 'Cargando...' }]
            : [
                { value: -1, label: 'Selecciona un pokemon', disabled: true },
                ...list.map((pokemon) => ({
                  value: pokemon.number,
                  label: pokemon.name,
                })),
              ]
        }
      />

      {pokemon ? (
        <div className="flex flex-row gap-8">
          <img className="h-48" src={pokemon.sprite} alt={pokemon.name} />
          <div className="w-full h-fit border-2 border-red-900 p-4 rounded-xl grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-2 text-left">Shiny</label>
              <Switch
                id="shiny"
                name="shiny"
                enabled={shiny}
                onChange={() => setShiny(!shiny)}
              />
            </div>
            <Input
              label="Nivel"
              name="level"
              type="number"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
            <Select
              label="Objeto"
              name="item"
              options={[
                { value: -1, label: 'Ninguno', disabled: true },
                { value: 0, label: 'Pokeball' },
                { value: 1, label: 'Greatball' },
                { value: 2, label: 'Ultraball' },
              ]}
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <label htmlFor="hp">HP</label>
                <input
                  type="checkbox"
                  name="hp"
                  id="hp"
                  checked={IVs.hp === 31}
                  onChange={handleIVsChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="atk">Atk</label>
                <input
                  type="checkbox"
                  name="atk"
                  id="atk"
                  checked={IVs.atk === 31}
                  onChange={handleIVsChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="def">Def</label>
                <input
                  type="checkbox"
                  name="def"
                  id="def"
                  checked={IVs.def === 31}
                  onChange={handleIVsChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="spa">SpA</label>
                <input
                  type="checkbox"
                  name="spa"
                  id="spa"
                  checked={IVs.spa === 31}
                  onChange={handleIVsChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="spd">SpD</label>
                <input
                  type="checkbox"
                  name="spd"
                  id="spd"
                  checked={IVs.spd === 31}
                  onChange={handleIVsChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="spe">Spe</label>
                <input
                  type="checkbox"
                  name="spe"
                  id="spe"
                  checked={IVs.spe === 31}
                  onChange={handleIVsChange}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="evs">EVs</label>
              <div className="flex flex-row justify-between gap-2">
                <div className="flex flex-col gap-4">
                  <label htmlFor="hp">HP</label>
                  <Input
                    type="number"
                    name="hp"
                    max="252"
                    id="hp"
                    value={EVs.hp}
                    onChange={handleEVsChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="atk">Atk</label>
                  <Input
                    type="number"
                    name="atk"
                    max="252"
                    id="atk"
                    value={EVs.atk}
                    onChange={handleEVsChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="def">Def</label>
                  <Input
                    type="number"
                    name="def"
                    max="252"
                    id="def"
                    value={EVs.def}
                    onChange={handleEVsChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="spa">SpA</label>
                  <Input
                    type="number"
                    name="spa"
                    max="252"
                    id="spa"
                    value={EVs.spa}
                    onChange={handleEVsChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="spd">SpD</label>
                  <Input
                    type="number"
                    name="spd"
                    max="252"
                    id="spd"
                    value={EVs.spd}
                    onChange={handleEVsChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="spe">Spe</label>
                  <Input
                    type="number"
                    name="spe"
                    max="252"
                    id="spe"
                    value={EVs.spe}
                    onChange={handleEVsChange}
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
      <Button color="red" disabled={!pokemon}>
        Publicar
      </Button>
    </form>
  );
}
