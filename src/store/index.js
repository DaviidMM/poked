import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import pokemonListReducer from './slices/pokemon';
import tradeOffersReducer from './slices/tradeOffers';
import itemsReducer from './slices/items';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    pokemon: pokemonListReducer,
    tradeOffers: tradeOffersReducer,
  },
});
