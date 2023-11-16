import { createSlice } from '@reduxjs/toolkit';

export interface searchValueState {
  searchValue: string;
}

const defValue = localStorage.getItem('searchValue') || '';

const initialState: searchValueState = {
  searchValue: defValue,
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: { payload: string }) => {
      state.searchValue = payload;
      console.log(state.searchValue);
      localStorage.setItem('searchValue', state.searchValue);
      console.log(localStorage.getItem('searchValue'));
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
