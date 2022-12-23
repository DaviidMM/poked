import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import pokemonListReducer from './slices/pokemon';
import tradeOffersReducer from './slices/tradeOffers';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pokemon: pokemonListReducer,
    tradeOffers: tradeOffersReducer,
  },
});
