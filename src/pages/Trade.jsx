import { useEffect } from 'react';
import { useState } from 'react';
import TradeCard from '../components/TradeCard';
import TradeSearchBar from '../components/TradeSearchBar';
import Button from '../components/Button';

const pokeOffers = [
  {
    giving: {
      name: 'Mewtwo',
      sprite: '/pokemon/icons/0150_00_00_00.png',
      level: 100,
      object: null,
      shiny: false,
      ivs: '31/31/31/31/31/31',
      evs: '252/252/4/0/0/0',
    },
    reciving: {
      name: 'Charizard',
      sprite: '/pokemon/icons/0006_00_00_00.png',
      level: 100,
      object: null,
      shiny: false,
    },
  },
  {
    giving: {
      name: 'Charmeleon',
      sprite: '/pokemon/icons/0005_00_00_00.png',
      level: 100,
      object: null,
      shiny: true,
      ivs: '31/31/31/31/31/31',
      evs: '252/252/4/0/0/0',
    },
    reciving: {
      name: 'Fuecoco',
      sprite: '/pokemon/icons/1013_00_00_00.png',
      level: 100,
      object: null,
      mandatory: true,
      shiny: false,
    },
  },
  {
    giving: {
      name: 'Gyarados',
      sprite: '/pokemon/icons/0130_00_00_00.png',
      level: 100,
      object: null,
      shiny: false,
      ivs: '31/31/31/31/31/31',
      evs: '252/252/4/0/0/0',
    },
    reciving: {
      name: 'Sprigatito',
      sprite: '/pokemon/icons/1010_00_00_00.png',
      level: 100,
      object: null,
      shiny: true,
    },
  },
  {
    giving: {
      name: 'Pikachu',
      sprite: '/pokemon/icons/0025_00_00_00.png',
      level: 100,
      object: null,
      shiny: false,
      ivs: '31/31/31/31/31/31',
      evs: '252/252/4/0/0/0',
    },
    reciving: {
      name: 'Baxcalibur',
      sprite: '/pokemon/icons/1055_00_00_00.png',
      level: 100,
      object: null,
      shiny: false,
    },
  },
];

export default function TradePage() {
  const [search, setSearch] = useState({
    giving: '',
    reciving: '',
    shiny: -1,
  });
  const [filteredOffers, setFilteredOffers] = useState(pokeOffers);

  useEffect(() => {
    const filtered = pokeOffers.filter(
      (offer) =>
        offer.giving.name.toLowerCase().includes(search.giving.toLowerCase()) &&
        offer.reciving.name
          .toLowerCase()
          .includes(search.reciving.toLowerCase()) &&
        (search.shiny === -1 || offer.giving.shiny === search.shiny)
    );
    setFilteredOffers(filtered);
  }, [search]);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-3xl xl:max-w-[1400px] mx-auto h-full">
      <div className="flex flex-row gap-4">
        <TradeSearchBar handleSearch={handleSearch} />
        <Button color="red" className="h-fit self-center">
          Crear anuncio
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        {filteredOffers.map((offer, index) => (
          <TradeCard
            key={index}
            giving={offer.giving}
            reciving={offer.reciving}
          />
        ))}
      </div>
    </div>
  );
}
