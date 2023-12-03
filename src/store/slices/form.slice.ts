import { createSlice } from '@reduxjs/toolkit';
import { TStoreForm } from '../../utils/types';

const initialState: TStoreForm[] = []
// {
  // name: '',
  // age: 0,
  // email: '',
  // password: '',
  // confirmPassword: '',
  // gender: 'male',
  // terms: false,
  // picture: '',
  // country: ''
// };

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, { payload }: { payload: TStoreForm }) => {
      state.push(payload)
      console.log(state)
    },
  },
});

export const { addForm } = formSlice.actions;

export default formSlice.reducer;