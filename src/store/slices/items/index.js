import { createSlice } from '@reduxjs/toolkit';
import status from './status';

const initialState = {
  list: [],
  status: status.idle,
  error: null,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.list = action.payload;
      state.status = status.loaded;
    },
    setItemsError: (state, action) => {
      state.error = action.payload;
      state.status = status.error;
    },
    setItemsLoading: (state) => {
      state.status = status.loading;
    },
  },
});

export const { setItems, setItemsError, setItemsLoading } = itemsSlice.actions;

export default itemsSlice.reducer;
