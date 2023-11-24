import { createSlice } from '@reduxjs/toolkit';
import { TData } from '../../utils/types';

export interface listState {
  list: TData | null;
}

const defValue = null;

const initialState: listState = {
  list: defValue,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, { payload }: { payload: TData | null }) => {
      state.list = payload;
    },
  },
});

export const { setList } = listSlice.actions;

export default listSlice.reducer;
