import { createSlice } from '@reduxjs/toolkit';
import { TStoreForm } from '../../utils/types';

const initialState: TStoreForm[] = []

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, { payload }: { payload: TStoreForm }) => {
      state.push(payload)
    },
  },
});

export const { addForm } = formSlice.actions;

export default formSlice.reducer;