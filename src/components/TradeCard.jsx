import { useState } from 'react';
import Characteristic from './Characteristic';
import ShinyIcon from './Icons/Shiny';
import TradeModal from './TradeModal';

export default function TradeCard({ giving, reciving }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenTradeModal = () => setModalOpen(true);
  const handleCloseTradeModal = () => setModalOpen(false);

  return (
    <div className="relative bg-gradient-to-b rounded-2xl border-4 border-red-800 bg-red-800 hover:bg-red-700 transition-all duration-300 overflow-hidden group h-fit">
      <TradeModal
        open={modalOpen}
        closeModal={handleCloseTradeModal}
        giving={giving}
        reciving={reciving}
      />
      <button className="w-full" onClick={handleOpenTradeModal}>
        {giving.shiny && (
          <ShinyIcon className="w-12 absolute top-4 right-4 z-20" />
        )}
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
            src={giving.sprite}
            className="group-hover:translate-x-2 relative -mt-14 transition-all duration-200 z-20"
            alt={giving.name}
          />
        </div>
        <div className="rounded-2xl -mt-14 group-hover:mt-0 transition-all duration-200 text-white p-2">
          <h1 className="pt-6 pb-0 text-xl font-bold text-right group-hover:py-1 transition-all duration-200 px-2">
            {giving.name} Nv. {giving.level}
          </h1>
          <div className="text-left grid grid-cols-2 gap-0.5 mb-2">
            <Characteristic label="Objeto" value={giving.object || 'Ninguno'} />
            <Characteristic label="Naturaleza" value={giving.nature || '?'} />
            <Characteristic label="IVs" value={giving.ivs || '?'} />
            <Characteristic label="EVs" value={giving.evs || '?'} />
          </div>
        </div>
      </button>
    </div>
  );
}
