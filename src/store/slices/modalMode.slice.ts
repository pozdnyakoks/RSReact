import { createSlice } from '@reduxjs/toolkit';

export interface modalModeState {
  modalMode: boolean;
}

const initialState: modalModeState = {
  modalMode: false,
};

export const modalModeSlice = createSlice({
  name: 'modalMode',
  initialState,
  reducers: {
    setModalMode: (state, { payload }: { payload: boolean }) => {
      state.modalMode = payload;
    },
  },
});

export const { setModalMode } = modalModeSlice.actions;

export default modalModeSlice.reducer;
