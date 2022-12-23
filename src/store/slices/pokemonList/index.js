import { createSlice } from '@reduxjs/toolkit';
import status from './status.js';

const initialState = {
  list: [],
  status: status.idle,
};

export const pokemonListSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
    },
    setPokemonList: (state, action) => {
      state.list = action.payload;
      state.status = status.loaded;
    },
  },
});

export const { addPokemon, setPokemonList } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
