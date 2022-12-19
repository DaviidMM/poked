import Button from './Button';
import Characteristic from './Characteristic';
import ShinyIcon from './Icons/Shiny';

export default function TradeCard({ giving, reciving }) {
  return (
    <div className="relative">
      <div className="sprite bg-white rounded-xl p-2 absolute top-0 left-0 z-10 w-20 shadow-md">
        <img src={giving.sprite} alt={giving.name} />
      </div>
      <div className="pt-4 pl-4">
        <div className="rounded-2xl bg-gradient-to-b from-red-900 via-red-700 to-red-700 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-300 text-white p-2 shadow-lg">
          <h1 className="py-4 text-xl font-bold text-right px-2">
            {giving.name} {giving.shiny && <ShinyIcon className="w-6 inline" />}
            Nv. {giving.level}
          </h1>
          <div className="text-left grid grid-cols-2 gap-0.5 mb-2">
            <Characteristic label="Objeto" value={giving.object || 'Ninguno'} />
            <Characteristic label="Naturaleza" value={giving.nature || '?'} />
            <Characteristic label="IVs" value={giving.ivs || '?'} />
            <Characteristic label="EVs" value={giving.evs || '?'} />
          </div>
          <Button color="green">¡Me interesa!</Button>
        </div>
      </div>
    </div>
  );
}
