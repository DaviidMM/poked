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
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
      state.status = status.loaded;
    },
    setLoadingOffers: (state) => {
      state.status = status.loading;
    },
  },
});

export const { addOffer, setOffers, setLoadingOffers } =
  tradeOffersSlice.actions;

export default tradeOffersSlice.reducer;
