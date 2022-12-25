import { useEffect } from 'react';
import { useState } from 'react';
import useTradeOffers from '../hooks/useTradeOffers';
import tradeOffersStatuses from '../store/slices/tradeOffers/status';
import pokemonListStatuses from '../store/slices/pokemon/status';
import TradeCard from '../components/TradeCard';
import TradeSearchBar from '../components/TradeSearchBar';
import Button from '../components/Button';
import NewOfferModal from '../components/NewOfferModal';
import usePokemonList from '../hooks/usePokemonList';
import LoadingPokeball from '../components/Loading/Pokeball';

export default function TradePage() {
  const { list, status: pokemonListStatus } = usePokemonList();
  const { offers, status: tradeOffersStatus } = useTradeOffers();
  const [search, setSearch] = useState({
    giving: '',
    reciving: '',
    shiny: false,
  });
  const [filteredOffers, setFilteredOffers] = useState(offers);
  const [openNewOfferModal, setOpenNewOfferModal] = useState(false);

  useEffect(() => {
    if (
      pokemonListStatus === pokemonListStatuses.loaded &&
      tradeOffersStatus === pokemonListStatuses.loaded
    ) {
      const filtered = offers.filter(
        (offer) =>
          list
            .find((pokemon) => pokemon.number === offer.giving.pokemon)
            .name.toLowerCase()
            .includes(search.giving.toLowerCase()) &&
          (!search.shiny || offer.giving.shiny === search.shiny)
      );
      setFilteredOffers(filtered);
    }
  }, [offers, search, pokemonListStatus, tradeOffersStatus]);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleOpenNewOfferModal = () => setOpenNewOfferModal(true);
  const handleCloseNewOfferModal = () => setOpenNewOfferModal(false);

  return (
    <div className="flex flex-col gap-6 items-center justify-center max-w-3xl xl:max-w-[1400px] mx-auto h-full">
      <NewOfferModal
        open={openNewOfferModal}
        closeModal={handleCloseNewOfferModal}
      />
      <div className="flex flex-row gap-4">
        <TradeSearchBar search={search} handleSearch={handleSearch} />
        <Button
          color="red"
          className="h-fit self-center"
          onClick={handleOpenNewOfferModal}
        >
          Crear anuncio
        </Button>
      </div>
      {tradeOffersStatus === tradeOffersStatuses.loaded ? (
        offers.length === 0 ? (
          <div className="text-6xl mt-8 text-zinc-400">
            No hay ofertas disponibles.
            <Button
              className="w-fit mt-8 mx-auto px-4 py-2 border-4"
              color="red"
              onClick={handleOpenNewOfferModal}
            >
              ¡Crea un anuncio!
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
            {filteredOffers.map((offer, index) => (
              <TradeCard
                key={index}
                giving={offer.giving}
                reciving={offer.reciving}
              />
            ))}
          </div>
        )
      ) : (
        <LoadingPokeball />
      )}
    </div>
  );
}
