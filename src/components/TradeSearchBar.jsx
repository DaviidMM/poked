import Input from './Input';
import Switch from './Switch';

export default function TradeSearchBar({ search, handleSearch }) {
  return (
    <div className="bg-red-800 text-white p-4 rounded-xl flex flex-row gap-4 [&_label]:font-bold [&>div>div]:bg-white">
      <Input
        label="Busco"
        type="text"
        placeholder="Buscar"
        name="giving"
        onChange={handleSearch}
      />
      <Input
        label="Ofrezco"
        type="text"
        placeholder="Buscar"
        name="reciving"
        onChange={handleSearch}
      />
      <div>
        <label htmlFor="shiny" className="block mb-3 text-left">
          Shiny
        </label>
        <Switch
          name="shiny"
          id="shiny"
          enabled={search.shiny}
          onChange={() => {
            handleSearch({ target: { name: 'shiny', value: !search.shiny } });
          }}
        />
      </div>
    </div>
  );
}
