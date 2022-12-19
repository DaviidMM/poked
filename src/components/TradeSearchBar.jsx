import Input from './Input';
import Select from './Select';

export default function TradeSearchBar({ handleSearch }) {
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
      <Select
        label="Shiny"
        name="shiny"
        id="shiny"
        options={[
          { label: 'Indiferente', value: -1 },
          { label: 'Si', value: true },
          { label: 'No', value: false },
        ]}
        onChange={(e) =>
          handleSearch({
            target: {
              name: 'shiny',
              value: Number(e.target.value) || e.target.value === 'true',
            },
          })
        }
      />
    </div>
  );
}
