import TradeCard from '../components/TradeCard';

export default function TradePage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-3xl xl:max-w-[1400px] mx-auto h-full">
      <h1 className="text-2xl font-semibold">Punto de intercambio</h1>
      <div className="grid grid-cols-4 gap-4 w-full">
        <TradeCard
          giving={{ name: 'Mewtwo' }}
          reciving={{ name: 'Charizard' }}
        />
        <TradeCard
          giving={{ name: 'Bulbasaur' }}
          reciving={{ name: 'Meowth' }}
        />
        <TradeCard
          giving={{ name: 'Raticate' }}
          reciving={{ name: 'Pancham' }}
        />
        <TradeCard
          giving={{ name: 'Pikachu' }}
          reciving={{ name: 'Moltres' }}
        />
      </div>
    </div>
  );
}
