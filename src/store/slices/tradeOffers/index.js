import { createSlice } from '@reduxjs/toolkit';
import status from './status.js';

const initialState = {
  offers: [],
  status: status.idle,
};

export const tradeOffersSlice = createSlice({
  name: 'tradeOffers',
  initialState,
  reducers: {
    addOffer: (state, action) => {
      state.offers.push(action.payload);
      state.status = status.loaded;
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
      state.status = status.loaded;
    },
    setLoadedOffers: (state) => {
      state.status = status.loaded;
    },
    setLoadingOffers: (state) => {
      state.status = status.loading;
    },
    setCreatingOffer: (state) => {
      state.status = status.creating;
    },
  },
});

export const {
  addOffer,
  setCreatingOffer,
  setLoadedOffers,
  setLoadingOffers,
  setOffers,
} = tradeOffersSlice.actions;

export default tradeOffersSlice.reducer;
