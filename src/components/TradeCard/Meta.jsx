import ShinyIcon from '../Icons/Shiny';

export default function PokemonMeta({ pokemon }) {
  const { shiny, item, ball } = pokemon;

  return (
    <div className="gap-2 absolute top-2 right-2 z-20 transition-all duration-300">
      <div className="relative">
        <div
          className={
            'flex flex-col gap-2 absolute transition-all duration-200 ' +
            (shiny && item
              ? 'top-0 right-12 group-hover:translate-x-12'
              : 'top-0 right-0')
          }
        >
          {shiny && (
            <div
              className="rounded-full p-0.5 h-10 w-10 border-2 bg-white hover:bg-zinc-200 border-red-900 font-bold"
              title="Shiny pokemon"
              data-shiny={shiny ? 'true' : 'false'}
            >
              <ShinyIcon className="fill-amber-300 group-hover:fill-amber-400" />
            </div>
          )}
          <div
            className="rounded-full p-0.5 h-10 w-10 border-2 bg-white hover:bg-zinc-200 border-red-900 font-bold"
            title={`Caught with ${ball.name}`}
            data-ball={ball.name}
          >
            <img src={ball.image} alt={ball.name} />
          </div>
        </div>
        <div
          className={
            'flex flex-col gap-2 transition-all duration-200 absolute right-0 ' +
            (shiny && item
              ? 'top-0 group-hover:translate-y-24'
              : shiny
              ? 'top-24'
              : 'top-12')
          }
        >
          <div
            className="rounded-full p-0.5 w-10 h-10 leading-8 border-2 bg-white hover:bg-zinc-200 border-red-900 font-bold"
            title={`Level ${pokemon.level}`}
            data-level={pokemon.level}
          >
            {pokemon.level}
          </div>
          {item && (
            <div
              className="rounded-full p-0.5 w-10 h-10 leading-8 border-2 bg-white hover:bg-zinc-200 border-red-900 font-bold"
              title={item.name}
              data-item={item.name}
              data-item-category={item.category}
            >
              <img src={item.image} alt={item.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
