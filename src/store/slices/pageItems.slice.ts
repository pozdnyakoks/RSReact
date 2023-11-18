import { createSlice } from '@reduxjs/toolkit';

export interface pageItemsState {
  pageItems: number;
}

const initialState: pageItemsState = {
  pageItems: 15,
};

export const pageItemsSlice = createSlice({
  name: 'pageItems',
  initialState,
  reducers: {
    setPageItems: (state, { payload }: { payload: number }) => {
      state.pageItems = payload;
    },
  },
});

export const { setPageItems } = pageItemsSlice.actions;

export default pageItemsSlice.reducer;
