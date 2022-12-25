import { useState } from 'react';
import usePokemon from '../../hooks/usePokemon';
import { mapEVsToString, mapIVsToString } from '../../utils';
import Characteristic from '../CardCharacteristic';
import TradeModal from '../TradeModal';
import PokemonMeta from './Meta';

export default function TradeCard({ giving, reciving }) {
  const [modalOpen, setModalOpen] = useState(false);
  const givingPokemon = usePokemon(giving);
  const recivingPokemon = usePokemon(reciving);

  const handleOpenTradeModal = () => setModalOpen(true);
  const handleCloseTradeModal = () => setModalOpen(false);

  return (
    givingPokemon && (
      <div className="relative bg-gradient-to-b rounded-2xl border-4 border-red-800 bg-red-800 hover:bg-red-700 transition-all duration-300 overflow-hidden group h-fit">
        <TradeModal
          open={modalOpen}
          closeModal={handleCloseTradeModal}
          giving={givingPokemon}
          reciving={recivingPokemon}
        />
        <button className="w-full" onClick={handleOpenTradeModal}>
          <PokemonMeta pokemon={givingPokemon} />
          <div
            className={
              'relative sprite overflow-hidden [clip-path:polygon(0_0,100%_0,100%_75%,0_90%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-200 ' +
              (giving.shiny
                ? 'bg-amber-300 group-hover:bg-amber-400'
                : 'bg-white group-hover:bg-zinc-100')
            }
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-5xl font-bold text-zinc-400">
              ¡Me interesa!
            </span>
            <img
              src={givingPokemon.sprite}
              className="group-hover:translate-x-2 relative -mt-14 transition-all duration-200 z-20"
              alt={giving.name}
            />
          </div>
          <div className="rounded-2xl -mt-14 group-hover:mt-0 transition-all duration-200 text-white p-2">
            <h1 className="pt-3 pb-0 text-xl font-bold text-right group-hover:py-1 transition-all duration-200 px-2">
              {givingPokemon.name}
            </h1>
            <div className="text-left grid grid-cols-2 gap-0.5 mb-2">
              <Characteristic
                label="Naturaleza"
                value={givingPokemon.nature || '?'}
              />
              <Characteristic
                label="IVs"
                value={mapIVsToString(givingPokemon.ivs) || '?'}
              />
              <Characteristic
                label="EVs"
                value={mapEVsToString(givingPokemon.evs) || '?'}
              />
            </div>
          </div>
        </button>
      </div>
    )
  );
}
