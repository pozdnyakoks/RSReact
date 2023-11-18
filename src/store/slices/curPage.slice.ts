import { createSlice } from '@reduxjs/toolkit';

export interface curPageState {
  curPage: string;
}

const initialState: curPageState = {
  curPage: '1',
};

export const curPageSlice = createSlice({
  name: 'curPage',
  initialState,
  reducers: {
    setCurPage: (state, { payload }: { payload: string }) => {
      state.curPage = payload;
    },
  },
});

export const { setCurPage } = curPageSlice.actions;

export default curPageSlice.reducer;
