import { configureStore } from '@reduxjs/toolkit';
import pokemonListReducer from './slices/pokemonList';
import authReducer from './slices/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pokemonList: pokemonListReducer,
  },
});
